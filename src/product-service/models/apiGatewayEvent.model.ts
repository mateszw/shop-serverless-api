import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";

export type APIGatewayEvent = Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
>;
