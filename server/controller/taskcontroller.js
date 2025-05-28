
const suggestionsmodel = require('../models/Task');

const categoryModel = require('../models/category')


exports.createSuggestion = async (req, res) => {
    const { title, category, description } = req.body;

    try {
        
        const suggest = await suggestionsmodel.create({ title, category, description });

        
        await categoryModel.findByIdAndUpdate(category, {
            $push: { suggestions: suggest._id }
        });

        
        res.json({ message: 'suggestion created successfully', suggest });
    } catch (error) {
        console.log('error occurred', error);
        res.status(500).json({ message: 'Server error' });
    }
};




exports.getSuggest = async(req,res)=>{

    try {
       const suggest = await suggestionsmodel.find().populate('category');
       res.json(suggest); 
    } catch (error) {
        
        console.log('error occured', error)
    }

}

exports.UpdateUpvot = async(req,res)=>{

    const{id} = req.params

    try {
         const updatedSuggestion = await suggestionsmodel.findByIdAndUpdate(
          id,
           { $inc: { NumberOfPivot: 1 } }, 
            { new: true } 
    ).populate('category');

    if (!updatedSuggestion) {
      return res.status(404).json({ message: 'Suggestion not found' });
    }

    res.json({
      message: 'Upvoted successfully',
      data: updatedSuggestion})
        
    } catch (error) {
        
        console.log('erro occured', error)
    }
  
}


