const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mailer = require("./controller/mailer");
const bodyParser = require("body-parser");
const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = process.env.PORT || 4500;

app.use("/mail", mailer);

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
