import { Response, Request } from "express";
import AbstractServices from "../../abstract/abstract.service";
const fs = require("fs");
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

  async getImageLinkFromImgbb(path: string):Promise<string> {
    let imageUrlBB;
    try {
      const binaryData = await fs.readFileSync(path).toString("base64");
      const formData = new FormData();
      formData.append("image", binaryData);
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=a65cc6d7cfe7a78a09d1f41dfcc553fe`,
        {
          method: "POST",
          body: formData,
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        const imageUrl = responseData.data.url;
        imageUrlBB = imageUrl;
      } else {
        throw new Error(
          `Error uploading image to imgBB: ${responseData.error.message}`
        );
      }
    } catch (error) {
      throw error;
    }
    return imageUrlBB;
  }
}

export default ProductServices;
