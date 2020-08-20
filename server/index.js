const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/route");

const app = express();

app.use(bodyParser.json());
app.use("/", cors());
app.use("/", router);
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(
  "mongodb+srv://student:student@cluster0.hlcwh.mongodb.net/elearning?retryWrites=true&w=majority"
);

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Node Server started at", process.env.PORT);
// });

app.listen(5000, () => {
  console.log("Node Server started at", 5000);
});
