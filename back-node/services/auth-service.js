// Path And Imports
const Token = require("../models/Refresh-Token");
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cardService = require('../services/card-service');

// Get User By Email
exports.getUserByEmail = async email => {
    return await User.findOne({ email: email });
};

// Get All Tokens 
exports.getAllTokens = async () => {
    return await Token.find();
};

// Remove Expired Token 
exports.removeExpiredToken = async () => {
    const now = new Date();
    await Token.deleteMany({ expiresAt: { $lte: now } });
};

// Register
exports.register = async user => {
    const { username, email, password } = user;

    const isExist = await this.getUserByEmail(email);

    if (isExist) {
        return { status: 409, message: 'This email alread registered' };
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    await cardService.createCard(newUser._id); // When user registered succesfully, card creating automaitclly for user
    await newUser.save();

    return { status: 201, message: 'Register Successfull! You can login!' };
};

// Access Token
exports.refreshAccessToken = async refreshToken => {
    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);

        const savedToken = await Token.findOne({ token: refreshToken });

        if (!savedToken) {
            return { status: 403, message: "Invalid refresh token!" };
        };

        const newAccessToken = jwt.sign({ email: decoded.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        return { status: 200, accessToken: newAccessToken };

    } catch (error) {
        return { status: 403, message: "Refresh token expired or invalid!" };
    };
};

// Login 
exports.login = async user => {
    const { email, password } = user;

    const isExist = await this.getUserByEmail(email);

    if(!isExist) {
        return { status: 404, message: 'User Not Found' }
    };

    const isPasswordValid = await bcrypt.compare(password, isExist.password);

    if (!isPasswordValid) {
        return { status: 403, message: 'Invalid Password' };
    };

    await this.removeExpiredToken();

    const accessToken = jwt.sign({ userID: isExist._id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userID: isExist._id, email: user.email }, process.env.JWT_REFRESH_SECRET_KEY, { expiresIn: '30d' });

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    await new Token({
        token: refreshToken,
        expiresAt,
        userId: isExist._id
    });

    return {
        status: 200,
        message: "Login successful",
        user: { id: isExist._id, email: isExist.email, username: isExist.username, expiresAt: expiresAt },
        accessToken,
        refreshToken,
    };
};

// Logout
exports.logout = async userId => {
    await Refresh.deleteMany({ userId: userId });
    return { status: 200, message: "Logout successful" };
};