const app = require(`express`).Router();
const auth = require(`../middleware/auth`)

const addNoteControl = require(`../controller/note/addNote`)
app.post(`/addNote`,auth.auth,addNoteControl.addNote);

const deleteNoteControl = require(`../controller/note/deleteNote`)
app.delete(`/deleteNote`, auth.auth, deleteNoteControl.deleteNote);

const updateNoteControl = require(`../controller/note/updateNote`)
app.patch(`/updateNote`, auth.auth, updateNoteControl.updateNote);

const allNoteControl = require(`../controller/note/getAllNote`)
app.get(`/allNotes`, auth.auth, allNoteControl.allNote);

const myNoteControl = require(`../controller/note/myNote`)
app.get(`/myNotes`,auth.auth,myNoteControl.myNote)

module.exports = app;
