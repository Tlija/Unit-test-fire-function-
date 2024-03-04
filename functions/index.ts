
import * as functions from '@google-cloud/functions-framework';

functions.http('helloGET', (req, res) => {
  res.send('Hello World!');
});

