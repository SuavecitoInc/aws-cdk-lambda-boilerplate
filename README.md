# AWS CDK Lambda Boilerplate

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template

## Useful resources

- https://docs.aws.amazon.com/lambda/latest/dg/lambda-cdk-tutorial.html

### Define the AWS CDK stack

A CDK stack is a collection of one or more constructs, which define AWS resources. Each CDK stack represents an AWS CloudFormation stack in your CDK app.

To define your CDK, stack follow the instructions for your preferred programming language. This stack defines the following:

- The function's logical name: MyFunction
- The location of the function code, specified in the code property. For more information, see Handler code in the AWS Cloud Development Kit (AWS CDK) API Reference.
- The REST API's logical name: HelloApi
- The API Gateway endpoint's logical name: ApiGwEndpoint

### Bundling

[Bundle Dependencies](./BUNDLE.md)
