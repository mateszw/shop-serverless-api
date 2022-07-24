import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "@models/apiGatewayEvent.model";
import ProductService from "@services/product.service";

export const getProductList: APIGatewayEvent = async () => {
  try {
    const products = await new ProductService().getAllProducts();

    return {
      statusCode: 200,
      body: JSON.stringify(products),
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

export const main = middyfy(getProductList);
