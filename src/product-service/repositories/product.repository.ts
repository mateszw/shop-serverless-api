import { Client } from "pg";
import config from "../database/config";
import { Product, ProductDetails } from "../models/product.model";
import { v4 as uuid } from "uuid";

class ProductRepository {
  private client: Client;
  constructor() {
    this.client = new Client(config);
  }

  public async getAll(): Promise<Product[]> {
    try {
      await this.client.connect();
      const { rows } = await this.client.query(
        "SELECT p.id, p.title, p.description, s.count FROM products AS p INNER JOIN stocks AS s ON p.id = s.product_id"
      );
      return rows || [];
    } finally {
      await this.client.end();
    }
  }

  public async getById(uuid: string): Promise<Product> {
    try {
      await this.client.connect();
      const { rows } = await this.client.query(
        `SELECT p.id, p.title, p.description, s.count FROM products AS p INNER JOIN stocks AS s ON p.id = s.product_id WHERE s.product_id = '${uuid}'`
      );
      return rows[0];
    } finally {
      await this.client.end();
    }
  }

  public async insert(product: ProductDetails): Promise<ProductDetails> {
    try {
      await this.client.connect();
      const productUuid = uuid();
      await this.client.query(
        `INSERT INTO products (id, title,description) VALUES ('${productUuid}','${product.title}', ${product.description}) `
      );
      await this.client.query(
        `INSERT INTO stocks (product_id, count) VALUES ('${productUuid}', ${Math.round(
          Math.random() * 10
        )})`
      );

      return product;
    } finally {
      await this.client.end();
    }
  }
}

export default ProductRepository;
