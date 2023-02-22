const express = require(`express`);
const app = express();

const port = 3000 || process.env.PORT;
app.use(express.json());

app.use(require(`./router/noteRouter`))
app.use(require(`./router/userRouter`));
const mongoose = require(`mongoose`);
mongoose.set('strictQuery', false)
mongoose
  .connect(`mongodb://localhost:27017/note-API`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`app running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(`catch error while connecting with data base`, error);
  });
