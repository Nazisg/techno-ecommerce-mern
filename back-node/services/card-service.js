const Card = require("../models/Card");


exports.getCardByUserID = async id => {
    return await Card.findOne({ user: id }).populate('product', '-desc -__v').populate('user', '-password -__v');
};


exports.createCard = async id => {
    return await new Card({
        user: id,
        product: []
    }).save();
};


exports.editCard = async (id, product, cardTotal) => {
    return Card.findOneAndUpdate(
        { user: id },
        { product: product, cardTotal: cardTotal },
        { new: true, runValidator: true }
    );
};