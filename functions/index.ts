
import * as functions from '@google-cloud/functions-framework';

functions.http('helloGET', async (req: functions.Request, res: functions.Response) => {
  res.send('Hello World!');
});
