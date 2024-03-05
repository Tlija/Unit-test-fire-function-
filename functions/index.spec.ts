import * as assert from 'assert';
import * as request from 'gaxios'; // Import entire module (recommended)
import { exec } from 'child_process';
import waitPort from 'wait-port';
import { before, after } from 'mocha';

const startFF = async (target, signature, port) => {
  const ff = exec(
    `npx functions-framework --target=${target} --signature-type=${signature} --port=${port}`
  );
  await waitPort({host: 'localhost', port});
  return ff;
};

const httpInvocation = (fnUrl, port) => {
  const baseUrl = `http://localhost:${port}`;

  // GET request
  return request({
    url: `${baseUrl}/${fnUrl}`,
  });
};

describe('index.test.ts', () => {
  describe('functions_helloworld_get helloGET', () => {
    const PORT = 8081;
    let ffProc;

    before(async () => {
      ffProc = await startFF('helloGET', 'http', PORT);
    });

    after(() => {
      if (ffProc) {
        ffProc.kill();
      }
    });

    it('helloGET: should print hello world', async () => {
      const response = await httpInvocation('helloGET', PORT);
      assert.strictEqual(response.status, 200);
      assert.strictEqual(response.data, 'Hello World!');
    });
  });
});
