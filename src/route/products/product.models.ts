import AbstractModels from "../../abstract/abstract.models";
import { IproductInfo } from "./product.type";

class ProductModel extends AbstractModels {
  async createProudct(productinfo: IproductInfo) {
    const product = await this.query().insert(productinfo).into("product");
    return product;
  }
  async getProudctList() {
    // const products= await this.query().select().from('product')


//     const products = await this.query().select('product.name' as 'productName','product.price','user.name' as 'userName')
//   .from('product')  // Replace "user" with the actual table name
//   .rightJoin('user', 'product.userId','user.userId');  // Adjust the join condition as per your database schema
    const products = await this.query().select('product.name as productName','product.price','user.name as userName')
  .from('product')  // Replace "user" with the actual table name
  .rightJoin('user', 'product.userId','user.userId');  // Adjust the join condition as per your database schema


    return products;
  }
}

export default ProductModel;
