// Path And Imports
const cardService = require('../services/card-service');
const productService = require('../services/product-service');

// Get Card By User ID
exports.getCardByID = async (req, res) => {
    const id = req.params.id;
    try {
        const card = await cardService.getCardUserByID(id);

        if (!card) {
            return res.status(404).json("Card couldn't found!");
        };

        if (card.product.length === 0) {
            return res.status(200).send('Card is empty');
        };

        res.status(200).json(card);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };  
};

// Edit Card
exports.editCard = async (req, res) => {
    const id = req.params.id;
    const cardItem = req.body;
    try {
        const isExist = await cardService.getCardByUserID(id);

        if (!isExist) {
            return res.status(404).json({ message: "Card couldn't found!" });
        };

        let totalPrice = 0;

        for(let item of cardItem.product) {
            const currentProduct = await productService.getProductByID(item);
            if (currentProduct) {
                totalPrice += currentProduct.price;
            };
        };

        isExist.cardTotal = totalPrice;

        const updateCard = await cardService.editCard(id, cardItem.product, totalPrice);
        res.status(200).json({ message: 'Card Updated Successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};