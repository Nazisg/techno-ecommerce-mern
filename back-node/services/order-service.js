// Path And Imports
const Order = require("../models/Order");

// Get All Orders
exports.getAllOrders = async () => {
    return await Order.find()
        .populate({
            path: 'cardID',
            select: '-cardTotal -__v',
            populate: [
                {
                    path: 'user',
                    select: '-password -__v'
                },
                {
                    path: 'product',
                    select: '-__v -desc -category'
                },
            ]
        });
};

// Get Order By ID
exports.getOrderByID = async id => {
    return await Order.findOne({ _id: id });
};

// Get Order By CardID
exports.getOrderByCardID = async id => {
    return await Order.findOne({ cardID: id })
        .populate({
            path: 'cardID',
            select: '-cardTotal -__v',
            populate: [
                {
                    path: 'user',
                    select: '-password -__v'
                },
                {
                    path: 'product',
                    select: '-__v -desc -category'
                },
            ]
        });
};

// Create New Order
exports.createOrder = async order => {
    return await new Order(order).save();
};

// Edit Order ==> This Fuction for update "isDelivered" status
exports.editOrder = async (id, order) => {
    return await Order.findOneAndUpdate(
        { _id: id },
        { isDelivered: order },
        { new: true, runValidators: true }
    );
};

// Delete Order
exports.deleteOrder = async id => {
    return await Order.findOneAndDelete({ _id: id });
};