const noteModel = require(`../../model/noteModel`);
exports.updateNote = async (req, res) => {
  try {
      await noteModel.noteModel.findByIdAndUpdate({
          _id: req.body.id
      },{  
      title: req.body.title,
      description: req.body.description,
    });
    res.status(200).json({ success: "one note updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in update note controller", error });
  }
};
