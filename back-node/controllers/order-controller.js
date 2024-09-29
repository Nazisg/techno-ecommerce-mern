// Path And Imports
const orderService = require('../services/order-service');
const cardService = require('../services/card-service');

// Get All Orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Get Order By Card ID
exports.getOrderByCardID = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await orderService.getOrderByCardID(id);

        if (!order) {
            return res.status(404).json({ message: "Order couldn't found!" });
        };

        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Create New Order
exports.createOrder = async (req, res) => {
    const id = req.params.id;
    const order = req.body;
    try {
        const isExist = await cardService.getCardByID(id);

        if (!isExist) {
            return res.status(404).json({ message: "There is no card" });
        };

        if (!order.deliveryAdress) {
            return res.status(400).json({ message: 'Address is required' });
        }

        if (isExist.product.length === 0) {
            return res.status(400).json({ message: 'You can not order! Your basket is empty!' });
        };

        const newOrder = await orderService.createOrder({
            cardID: isExist.id,
            deliveryAdress: order.deliveryAdress,
            totalAmount: isExist.cardTotal
        });

        res.status(201).json({ message: 'Order successfully compleated' });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Edit Order
exports.editOrder = async (req, res) => {
    const id = req.params.id;
    const query = req.query.isDelivered;
    try {
        const isExist = await orderService.getOrderByID(id);

        if (!isExist) {
            return res.status(404).json({ message: "Order couldn't found!" });
        };

        const updateOrder = await orderService.editOrder(id, query);

        res.status(200).json({ message: 'Order updated' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Delete Order
exports.deleteOrder = async (req, res) => {
    const id = req.params.id;
    try {
        const isExist = await orderService.getOrderByID(id);

        if (!isExist) {
            return res.status(404).json({ message: "Order couldn't found!" });
        };

        const order = await orderService.deleteOrder(id);
        res.status(200).json({ message: 'Order Deleted' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};