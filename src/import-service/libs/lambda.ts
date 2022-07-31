import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import inputOutputLogger from "@middy/input-output-logger";
import cors from "@middy/http-cors";

export const middyfy = (handler) => {
  return middy(handler)
    .use(middyJsonBodyParser())
    .use(inputOutputLogger())
    .use(
      cors({
        methods: "GET",
        origin: "https://d3mt56tee0pt36.cloudfront.net",
        headers: "Content-Type",
      })
    );
};
