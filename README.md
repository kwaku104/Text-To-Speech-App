# Serverless Text-To-Speech Application with Amazon Polly

This project is a serveless text-to-speech app built with Amazon Polly, API Gateway, Lambda, DynamoDB, SNS, S3 & ReactJS
The architecture of this application fully serverless i.e. AWS hanldes the routine work of provisioning, maintaining and scaling the server infrastucture of this application.

The user interface of the application is was built using reactjs and is hosted on Amazon Simple Storage Service.

When text about a new post is sent by the application, the information is sent to a RESTful web service on Amazon API Gateway, which triggers an AWS Lambda function. The Lambda function begins the process of converting the text to speech by generating an MP3 file.

All information about new posts are stored in an Amazon DynamoDB table. This is done by the lambda function.

To ensure that the application is asynchronous, Amazon SNS is used to depcouple the process of receiving information about new posts and starting the text to speech conversion.

The Lambda function uses Amazon Polly to convert the text to speech by generating an audio file in a specified language. The resulting MP3 file is stored in an S3 bucket.

The RESTful webservice deployed to Amazon API Gateway is used to retrieve information about posts.

The application can be accessed at: [Text-To-Speech-App](http://www-audioposts-23.s3-website.eu-west-2.amazonaws.com)
