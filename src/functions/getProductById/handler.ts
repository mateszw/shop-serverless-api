import PRODUCTS_MOCK from "@functions/__mocks__/productsMock";
import { middyfy } from "@libs/lambda";

export const getProductById = async (event) => {
  const product = PRODUCTS_MOCK.find(
    (product) => product.id === event.pathParameters.id
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
};

export const main = middyfy(getProductById);
