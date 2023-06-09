const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dbconfig = require("./Config/DBconfig");
require("dotenv").config();

const auth = require("./Middlewares/auth");
const error = require("./Middlewares/error");

const app = express();
app.use(cors());

mongoose
  .connect(dbconfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use(express.json());

app.use("/users", require("./Routes/usersRoutes"));
app.use("/loans", require("./Routes/loansRoutes"));
app.use(error.errorHandler);

app.listen(process.env.port || 4000, function () {
  console.log("......... SERVER STARTED ......... ");
});
