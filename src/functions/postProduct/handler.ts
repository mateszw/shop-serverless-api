import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "@models/apiGatewayEvent.model";
import { ProductDetails } from "@models/product.model";
import productService from "@services/product.service";

export const postProduct: APIGatewayEvent = async (event) => {
  try {
    const body = event.body as unknown as ProductDetails;
    if (body?.title && body?.description) {
      const product = await new productService().insertProduct(body);
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    }
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Bad Request",
      }),
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

export const main = middyfy(postProduct);
