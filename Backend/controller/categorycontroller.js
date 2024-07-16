const categoryInstance = require('../services/categoryservice');

const createCategory = async (req, res) => {
    try {
        const data = req.body;
        const newCategory = await categoryInstance.createCategory(data);
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json(err);
    }
};

const findAllCategory = async (req, res) => {
    try {
        const allCategory = await categoryInstance.findAllCategory();
        res.status(200).json(allCategory);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getOneCategory = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.json()
        }
        const oneCategory = await categoryInstance.findOneCategory(id);
        res.status(201).json(oneCategory);
    } catch (err) {
        res.status(500).json(err);
    }
};

const categoryUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        let details = {};
            if (name) details.title = name;
            if (description) details.description = description;

        const updated = await categoryInstance.updateCategory(id, details);
        res.status(201).json(updated);
    } catch (err) {
        res.status(500).json(err);
    }
};

const categoryDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await categoryInstance.deleteCategory(id);
        res.status(201).json(deleted);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { createCategory, findAllCategory, getOneCategory, categoryUpdate, categoryDelete };


