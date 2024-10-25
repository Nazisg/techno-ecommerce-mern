const categoryService = require('../services/category-service');


exports.getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve categories', error });
    }
};


exports.getCategoryByID = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categoryService.getCategoryByID(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve category', error });
    }
};


exports.addCategory = async (req, res) => {
    const { title, image } = req.body;
    try {
        if (!title || !image) {
            return res.status(400).json({ message: 'Title and image are required' });
        }

        
        const isExist = await categoryService.getCategoryByTitle(title.toLowerCase());
        if (isExist) {
            return res.status(400).json({ message: 'Category already exists' });
        }

       
        const newCategory = {
            title: title.toLowerCase(),
            image 
        };

        
        const addedCategory = await categoryService.addCategory(newCategory);
        res.status(201).json({ message: 'Category added successfully', category: addedCategory });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add category', error });
    }
};


exports.editCategory = async (req, res) => {
    const { id } = req.params;
    const { title, image } = req.body;

    try {
        if (!title || !image) {
            return res.status(400).json({ message: 'Title and image are required' });
        }


        const category = await categoryService.getCategoryByID(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

      
        const isRepeat = await categoryService.getCategoryByTitle(title.toLowerCase());
        if (isRepeat && isRepeat._id.toString() !== id) {
            return res.status(400).json({ message: 'Category title already exists' });
        }

        
        const updatedCategory = {
            title: title.toLowerCase(),
            image
        };

       
        const editedCategory = await categoryService.editCategory(id, updatedCategory);
        res.status(200).json({ message: 'Category updated successfully', category: editedCategory });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update category', error });
    }
};


exports.deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const category = await categoryService.getCategoryByID(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        await categoryService.deleteCategory(id);
        res.status(200).json({ message: "Category deleted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete category', error });
    }
};
