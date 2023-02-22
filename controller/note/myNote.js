const noteModel = require(`../../model/noteModel`);
exports.myNote = async (req, res) => {
  try {
      const myNote = await noteModel.noteModel.find({
      userId : req.userId
    });
    res.status(200).json({ success: myNote });
  } catch (error) {
    res
      .status(500)
      .json({ error: "catch error in get my notes controller", error });
  }
};
