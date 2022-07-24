import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "@models/apiGatewayEvent.model";
import ProductService from "@services/product.service";

export const getProductById: APIGatewayEvent = async (event) => {
  try {
    const product = await new ProductService().getProductById(
      event.pathParameters.id
    );
    if (!product) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "Product with given id does not exists",
        }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(product),
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

export const main = middyfy(getProductById);
