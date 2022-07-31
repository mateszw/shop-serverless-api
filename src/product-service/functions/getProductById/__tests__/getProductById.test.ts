import PRODUCTS_MOCK from "../../__mocks__/productsMock";
import { getProductById } from "../handler";

jest.mock("@libs/lambda", () => {
  return {
    middyfy: jest.fn(),
  };
});

describe("getProductList", () => {
  it("Should return product list", async () => {
    const result = await getProductById({ pathParameters: { id: "1" } });

    expect(result).toStrictEqual({
      statusCode: 200,
      body: JSON.stringify(PRODUCTS_MOCK.find((e) => e.id === "1")),
    });
  });

  it("Should return 404 error if there is no product with specified id", async () => {
    const result = await getProductById({ pathParameters: { id: "100" } });

    expect(result).toStrictEqual({
      statusCode: 404,
      body: JSON.stringify({
        message: "Product with given id does not exists",
      }),
    });
  });
});
