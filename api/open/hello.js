import middy from '@middy/core';
import cors from '@middy/http-cors';
import httpErrorHandler from '@middy/http-error-handler';

import { hello } from '../../lib/hello';

export const get = middy(async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: hello(),
    }),
  };
});

get.use(httpErrorHandler()).use(cors());
