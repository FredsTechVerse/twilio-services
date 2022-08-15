require('dotenv').config();
const twilio = require("twilio");

//IMPORTANT CODE THAT WE NEED TO APPLY B4 STARTING ANYTHING.
//============================================================
/**Download the helper library from https://www.twilio.com/docs/node/install
 * Find your Account SID and Auth Token at twilio.com/console
 * and set the environment variables. See http://twil.io/secure
 */

//STEP 1 : AUTHENTICATE OUR CLIENT (THE OWNER OF THE TWILIO ACCOUNT)
//===================================================================

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const virtualNo = process.env.VIRTUAL_NO;
const reciepientNo = process.env.RECIEPIENT_NO;

const client = new twilio(accountSid, authToken);

// UTILIZING THE MESSAGE API.
//===========================
const messageBody = {
    body: "Hakuna matata from SMS Message Application",
    to: `${reciepientNo}`, // Text this number
    from: `${virtualNo}`, // From a valid Twilio number
  };

client.messages
  .create(messageBody)
  .then((message) => {
    try {
        console.log(`Message Status : ${message.status} , Created on : ${message.dateCreated}`)
    } catch (error) {
        console.log(error);
    }
  });

/*  This can be broadened to accommodate http request mehn.
    Simple free stuff mehn.At a very little cost. 
    Surely , Twilio is cool.
*/

//MAKING A PHONECALL TO A CLIENT
//===============================
// client.calls
//   .create({
//     url: "http://demo.twilio.com/docs/voice.xml",
      //  to: `${reciepientNo}`, // Text this number
      //  from: `${virtualNo}`, // From a valid Twilio number
//   })
//   .then((call) => console.log(call.sid));

// GETTING EXISTING RECORDS
//===========================
/*
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client
  .calls('CA42ed11f93dc08b952027ffbc406d0868')
  .fetch()
  .then(call => console.log(call.to));
 */

//ITERATING RECORDS
//===================
/*
const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const authToken = "your_auth_token";
const client = require("twilio")(accountSid, authToken);

client.calls.each((call) => console.log(call.direction));

*/
