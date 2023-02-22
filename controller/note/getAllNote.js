const noteModel = require(`../../model/noteModel`);
exports.allNote = async (req, res) => {
  try {
      const allNote = await noteModel.noteModel.find();
    res.status(200).json({ allNote:allNote });
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in get all notes controller", error });
  }
};
