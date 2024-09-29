// Path And Imports
const categoryService = require('../services/category-service');

// Get All Categories
exports.getAllCategories = async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories();
      res.status(200).json(categories);  
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Get Category By ID
exports.getCategoryByID = async (req, res) => {
    const id = req.params.id;
    try {
        const category = await categoryService.getCategoryByID(id);

        if (!category) {
            return res.status(404).json({ message: "Category couldn't find!" });
        };

        res.status(200).json(category);  
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Add New Category
exports.addCategory = async (req, res) => {
    const category = req.body;
    category.title = category.title.toLowerCase();
    try {
        if (!category.title) {
            return res.status(400).json({ message: 'Title is required!' });
        };

        const isExist = await categoryService.getCategoryByTitle(category.title);

        if (isExist) {
            return res.status(400).json({ message: 'This category already exist!' });
        };

        const newCategory = categoryService.addCategory(category);

        res.status(201).json({ message: 'Category added successfully' });

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Edit Catgeory
exports.editCategory = async (req, res) => {
    const id = req.params.id;
    const category = req.body;
    category.title = category.title.toLowerCase();
    try {
        if (!category.title) {
            return res.status(400).json({ message: 'Title is required!' });
        };

        const isExist = await categoryService.getCategoryByID(id);

        if (!isExist) {
            return res.status(404).json({ message: "Category couldn't find!" });
        };

        const isRepeat = await categoryService.getCategoryByTitle(category.title);

        if (isRepeat) {
            return res.status(400).json({ message: 'Category already exist!' });
        };

        const edittedCategory = await categoryService.editCategory(id, category);

        return res.status(200).json({ message: 'Category editted succesfully' });
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};

// Delete Category
exports.deleteCategory = async (req, res) => {
    const id = req.params.id;
    try {
      const isExist = await categoryService.getCategoryByID(id);
      
      if (!isExist) {
        return res.status(404).json({ message: "Category couldn't found!" }); 
      };

      const category = await categoryService.deleteCategory(id);
      res.status(200).json({ message: "Category removed successfully" });
      
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    };
};