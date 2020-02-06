const sgMail = require("@sendgrid/mail");
const sendGridKey = require("../config/keys").sendGridKey;

const gridMail = async msg => {
  sgMail.setApiKey(sendGridKey);
  await sgMail.send(msg).catch(e => console.error(e));
};

module.exports = {
  gridMail
};
