const express = require("express");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/DB.js");

//config
dotenv.config();

//database connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Route
//user route
app.use("/api/v1/users", require("./routes/userRoute"));
//transaction route
app.use("/api/v1/transactions", require("./routes/transactionRoute.js"));

//static file
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//PORT
const PORT = process.env.PORT || 8080;

//lsiten
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.DEV_MODE} on PORT ${PORT}`.bgMagenta
      .white
  );
});
