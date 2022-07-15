import PRODUCTS_MOCK from "../../___mocks___/productsMock";
import { getProductList } from "../handler";

jest.mock("@libs/lambda", () => {
  return {
    middyfy: jest.fn(),
  };
});

describe("getProductList", () => {
  it("Should return product list", async () => {
    const result = await getProductList();

    expect(result).toStrictEqual({
      statusCode: 200,
      body: JSON.stringify(PRODUCTS_MOCK),
    });
  });
});
