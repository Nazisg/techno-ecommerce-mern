
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

exports.editCard = async (req, res) => {
    const id = req.params.id;
    const cardItem = req.body;
    try {
        const isExist = await cardService.getCardByUserID(id);

        if (!isExist) {
            return res.status(404).json({ message: "Card couldn't be found!" });
        };

        let totalPrice = 0;

        // Loop over each product in the card and calculate the total price
        for (let item of cardItem.product) {
            const currentProduct = await productService.getProductByID(item);

            if (currentProduct) {
                // If there's a sale price, use it, otherwise use the regular price
                const priceToUse = currentProduct.salePrice || currentProduct.price;
                totalPrice += priceToUse;
            } else {
                return res.status(404).json({ message: `Product with ID ${item} couldn't be found.` });
            }
        };

        isExist.cardTotal = totalPrice;

        const updateCard = await cardService.editCard(id, cardItem.product, totalPrice);
        res.status(200).json({ message: 'Card Updated Successfully', total: totalPrice });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};
