import middy from '@middy/core';
import cors from '@middy/http-cors';
import httpErrorHandler from '@middy/http-error-handler';

export const get = middy(async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${event.requestContext.authorizer.claims.email}!`,
    }),
  };
});

get.use(httpErrorHandler()).use(
  cors({
    // Sets Access-Control-Allow-Credentials
    credentials: true,
    // Sets Access-Control-Allow-Origin to current origin.
    getOrigin: (incomingOrigin) => incomingOrigin,
  })
);
