const accountSid = 'AC987f0e91a547dce3176afeae59a2e68a';
const authToken = '3193090459e4c12b3accd86e709ea94f';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Hello there!',
         from: '+12512610501',
         mediaUrl: ['https://demo.twilio.com/owl.png'],
         to: '+9087523848'
       })
      .then(message => console.log(message.sid));