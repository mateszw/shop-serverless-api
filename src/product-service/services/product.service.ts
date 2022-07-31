import { ProductDetails } from "../models/product.model";
import ProductRepository from "../repositories/product.repository";

class ProductService {
  private productRepository: ProductRepository;
  constructor() {
    this.productRepository = new ProductRepository();
  }

  public async getAllProducts() {
    return await this.productRepository.getAll();
  }

  public async getProductById(uuid: string) {
    return await this.productRepository.getById(uuid);
  }

  public async insertProduct(product: ProductDetails) {
    return await this.productRepository.insert(product);
  }
}

export default ProductService;
