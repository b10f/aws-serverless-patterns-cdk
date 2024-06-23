#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsServerlessPatternsStack } from '../lib/aws-serverless-patterns-stack';

const app = new cdk.App();
new AwsServerlessPatternsStack(app, 'aws-serverless-patterns');
