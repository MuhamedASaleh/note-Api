const noteModel = require(`../../model/noteModel`);
const userModel = require(`../../model/userModel`);
exports.addNote = async (req, res) => {
  try {
    await noteModel.noteModel.insertMany({
      userId: req.userId,
      title: req.body.title,
      description: req.body.description,
    });

    
    const allNotes = await noteModel.noteModel.find({
      userId: req.userId,
    });
    
    await userModel.userModel.findByIdAndUpdate(
      { _id: req.userId },
      {
        $set: {
          allNote: allNotes,

          numberOfNote: allNotes.length,
        },
      }
      );
      res.status(200).json({ success: "one note added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in add new note controller", error });
  }
};
