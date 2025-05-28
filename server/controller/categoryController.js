

const categorySchema = require('../models/category');

const suggestModel = require('../models/Task');

exports.createCategory = async(req,res)=>{

    const {title} = req.body

    try {
        
        const category = await categorySchema.create({title});
        res.json({message:'category created successfully' , category});
    } catch (error) {
        
        console.log('error occured', error);
    }

}

exports.getCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const categ = await categorySchema.findById(id).populate({
            path: 'suggestions',
            select: 'id title' // Only return these fields
        });

        if (!categ) {
            return res.status(404).json({ message: 'Category not found' });
        }

        return res.status(200).json({ message: 'received', categ });
    } catch (error) {
        console.error('error occurred', error);
        return res.status(500).json({ message: 'Server error' });
    }
};
