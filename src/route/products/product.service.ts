import { Response, Request } from "express";
import AbstractServices from "../../abstract/abstract.service";

class ProductServices extends AbstractServices {
  public async productCreate(req: Request, res: Response) {
    const Product = req.body;
    return await this.models.db.transaction(async (trx) => {
      const product_conn = this.models.productModel(req);
      const product = await product_conn.createProudct(Product);
      return {
        success: true,
        message: "Product has been created successfully",
        data: { ...Product, productId: product[0] },
      };
    });
  }
  public async getProductList(req: Request) {
    return await this.models.db.transaction(async (trx) => {
      const product_conn = this.models.productModel(req);
      const product = await product_conn.getProudctList();
      return {
        success: true,
        message: "Product has been retrive successfully",
        data: product,
      };
    });
  }
}

export default ProductServices;
