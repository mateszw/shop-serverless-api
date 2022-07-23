import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import cors from "@middy/http-cors";

export const middyfy = (handler) => {
  return middy(handler)
    .use(middyJsonBodyParser())
    .use(
      cors({
        methods: "GET",
        origin: "https://d3mt56tee0pt36.cloudfront.net",
        headers: "Content-Type",
      })
    );
};
