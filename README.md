# AWS API Template

Getting your application's back end up and running on [Amazon Web Services](https://aws.amazon.com/) (AWS) is not a trivial exercise, especially if you want a robust and extensible result that will support a modern development process.

Here's a plug-and-play [AWS API template](https://github.com/karmaniverous/aws-api-template) that offers the following features:

- Produces a secure [Amazon Web Services](https://aws.amazon.com/) (AWS) API using the [Serverless Framework](https://www.serverless.com/).

- Features both public and private endpoints.

- Secured by an [AWS Cognito User Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html) supporting native username/password authentication and one federated identity provider (Google).

- Configured to act as both the authentication provider and a secure remote API for my [Next.js Template](https://github.com/karmaniverous/nextjs-template) on the front end.

- Efficient and highly configurable. You should be able to get it up and running on your own domain, in your own infrastructure, in just a few minutes with edits to nothing but environment variables.

- Deployable from the command line to multiple [AWS CloudFormation](https://aws.amazon.com/cloudformation/) Stacks, each exposing an independent environment (e.g. `dev`, `test`, and `prod`), with its own authentication provider, at configurable endpoints.

- Built-in backwards compatibility. Every major release triggers the deployment of an independent Stack on every environment. Share key resources across Stacks so you can bring your users with you across major versions.

- Automatically build and deploy the relevant Stack following every code push with [AWS CodePipeline](https://aws.amazon.com/codepipeline/). See [Automated Deployment](#automated-deployment) below for more info.

- Code formatting at every save & paste with
  [`prettier`](https://www.npmjs.com/package/prettier).

- One-button release to GitHub with
  [`release-it`](https://www.npmjs.com/package/release-it).

**[Click here](https://karmanivero.us/blog/aws-api-template/) for full
documentation & instructions!**

# Library Documentation

<a name="hello"></a>

## hello(id) ⇒ <code>any</code>
Returns a greeting.

**Kind**: global function  
**Returns**: <code>any</code> - A friendly greeting.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>any</code> | An identity. |


---

[Click here](https://karmanivero.us/blog/aws-api-template) to review this template's documentation.

# Library Documentation

<a name="hello"></a>

## hello(id) ⇒ <code>any</code>
Returns a greeting.

**Kind**: global function  
**Returns**: <code>any</code> - A friendly greeting.  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>any</code> | An identity. |

