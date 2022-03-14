// import express from "express";

// const router = express.Router();

// const AWS = require("aws-sdk");
// const SES = new AWS.SES({ region: "ap-southeast-2" });

// router.post("/email", (req, res) => {
//   const { email, message, name } = req.body;
//   sesEmail("lin.maggies@gmail.com", email, message, name)
//     .then((val) => {
//       console.log("got this back", val);
//       res.send("successful");
//     })
//     .catch((err) => {
//       res.send("/error" + err);
//     });
// });

// function sesEmail(emailTo, emailFrom, message, name) {
//   const params = {
//     Destination: {
//       ToAddresses: [emailTo],
//     },
//     Message: {
//       Body: {
//         Text: {
//           Data: "From Contact: " + name + "\n" + message,
//         },
//       },
//       Subject: {
//         Data: "Name: " + emailFrom,
//       },
//     },
//     Source: "lin.maggies@gmail.com",
//   };
//   return SES.sendEmail(params).promise();
// }

const AWS = require("aws-sdk");

const SES_CONFIG = {
  accessKeyId: "AKIAV3XCZ5G2A7FJF2MV",
  secretAccessKey: "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",
  region: "ap-southeast-2",
};

const AWS_SES = new AWS.SES(SES_CONFIG);

function sendEmail(emailTo, message, name) {
  const params = {
    Destination: {
      ToAddresses: [emailTo],
    },
    Message: {
      Body: {
        Text: {
          Data: "From Contact: " + name + "\n" + message,
        },
      },
      Subject: {
        Data: "Name: ",
      },
    },
    Source: "lin.maggies@gmail.com",
  };
  return AWS_SES.sendEmail(params).promise();
}

// let sendEmail = (recipientEmail, name) => {
//   let params = {
//     Source: "<email address you verified>",
//     Destination: {
//       ToAddresses: [recipientEmail],
//     },
//     ReplyToAddresses: [],
//     Message: {
//       Body: {
//         Html: {
//           Charset: "UTF-8",
//           Data: "This is the body of my email!",
//         },
//       },
//       Subject: {
//         Charset: "UTF-8",
//         Data: `Hello, ${name}!`,
//       },
//     },
//   };
//   return AWS_SES.sendEmail(params).promise();
// };

module.exports = {
  sendEmail,
};
