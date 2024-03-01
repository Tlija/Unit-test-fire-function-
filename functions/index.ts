const  functions = require('firebase-functions');

 const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
})
