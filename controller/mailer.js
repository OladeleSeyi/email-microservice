const router = require("express").Router();
let messageMaker = require("./utils/messagemaker");
let gridMail = require("./email");

router.post("/", (req, res) => {
  console.log("body", req.body);
  let data = req.body;
  let html = messageMaker.messageMaker(data);
  let text = messageMaker.textMaker(data);
  let title = data.subject || `${data.formName} Submission`;

  let msg = {
    to: [data.email, "tayoo3@vt.edu"],
    from: "tayoo3@vt.edu",
    subject: title,
    text: text,
    html: html
  };

  try {
    gridMail.gridMail(msg);
  } catch (e) {
    console.log("error");
    res.status(500).send({ error: "An error occured while sending the email" });
    console.log(e);
  }
  res.json({ msg: "Your message has been recorded" });
});

module.exports = router;
