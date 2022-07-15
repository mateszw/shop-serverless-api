import { middyfy } from "@libs/lambda";
import PRODUCTS_MOCK from "@functions/__mocks__/productsMock";

export const getProductList = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(PRODUCTS_MOCK),
  };
};

export const main = middyfy(getProductList);
