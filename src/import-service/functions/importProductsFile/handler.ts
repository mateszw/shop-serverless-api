import { APIGatewayEvent } from "src/product-service/models/apiGatewayEvent.model";
import { middyfy } from "../../libs/lambda";
import { S3 } from "aws-sdk";

export const importProductsFile: APIGatewayEvent = async (event) => {
  try {
    const s3 = new S3({ region: "eu-west-1" });

    const catalog = event.queryStringParameters.name;
    const path = `uploaded/${catalog}`;

    const url = await s3.getSignedUrlPromise("putObject", {
      Bucket: process.env.BUCKET,
      Key: path,
      ContentType: "text/csv",
    });

    return {
      statusCode: 200,
      body: JSON.stringify(url),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
      }),
    };
  }
};

export const main = middyfy(importProductsFile);
