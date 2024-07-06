const categoryModel = require('../schemas/categoryschema');

class CategoryServices {
    async createCategory (catInfo) {
        const newCategory = new categoryModel(catInfo);
        const savedCategory = await newCategory.save();
        return (savedCategory);
    }

    async findAllCategory () {
        const allCategory = await categoryModel.find();
        return (allCategory);
    }

    async findOneCategory (id) {
        const oneCategory = await categoryModel.findOne({ _id: id});
        return (oneCategory);
    }

    async updateCategory (id, catInfo) {
        const updated = await categoryModel.findOneAndUpdate({ _id: id, }, catInfo, { new: true });
        return (updated);
    }

    async deleteCategory (id) {
        const deleted = await categoryModel.findOneAndDelete({ _id: id});
        return (deleted);
    }
};

const categoryInstance = new CategoryServices();

module.exports = categoryInstance;