const userModel = require(`../../model/userModel`);
const noteModel = require(`../../model/noteModel`);
exports.deleteNote = async (req, res) => {
  try {
    await noteModel.noteModel.deleteOne({
      _id: req.body.id,
    });
    
    const user = await userModel.userModel.findOne({_id: req.userId })
    
    const newNotes = user.allNote.filter(note => {
      if (note._id != req.body.id) {
        return note
      }
    });
    await userModel.userModel.findByIdAndUpdate(
      { _id: req.userId },
      {
        $set: {
          allNote: newNotes,
          numberOfNote: newNotes.length,
        },
      }
    );
    res.status(200).json({ success: "one note deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in delete note controller", error });
  }
};
