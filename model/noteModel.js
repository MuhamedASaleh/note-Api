const mongoose = require(`mongoose`);

const noteSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      res: "user",
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const noteModel = mongoose.model(`note`, noteSchema);

exports.noteModel = noteModel;
