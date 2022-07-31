import { middyfy } from "../../libs/lambda";
import { S3 } from "aws-sdk";

import csv from "csv-parser";

const bucket = process.env.BUCKET;

export const importFileParser = async (event) => {
  const s3 = new S3({ region: "eu-west-1" });

  for (const record of event.Records) {
    const s3Stream = s3
      .getObject({
        Bucket: bucket,
        Key: record.s3.object.key,
      })
      .createReadStream();

    s3Stream
      .pipe(csv())
      .on("data", (data) => {
        console.log(data);
      })
      .on(
        "end",
        async () =>
          await s3
            .copyObject({
              Bucket: bucket,
              CopySource: `${bucket}/${record.s3.object.key}`,
              Key: record.s3.object.key.replace("uploaded", "parsed"),
            })
            .promise()
      );
  }
};

export const main = middyfy(importFileParser);
