import * as functions from "firebase-functions";

export const firstFunctionHttp = functions.https.onRequest((req, res) => {
  res.send("test fireFunction");
});



