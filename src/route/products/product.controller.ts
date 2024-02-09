import AbstractController from "../../abstract/abstract.controllers";
import ProductServices from "./product.service";
import ProductValidator from "./product.validator";
const fs = require('fs');
class ProductController extends AbstractController {
  private services = new ProductServices();
  private validator = new ProductValidator();
  constructor() {
    super();
  }
  public createProduct = this.assyncWrapper.wrap(
   [] /* this.validator.createProudct */,
    async (req, res) => {
      const imageUrl=await this.services.getImageLinkFromImgbb(req?.file?.path as string)
      if(imageUrl){
        req.body.image=imageUrl
        const productData = await this.services.productCreate(req, res);
        if (productData.success) {
          res.status(200).json(productData);
        } else {
          this.error("product created errror");
        }
      }
    }
  );
  public getProductList = this.assyncWrapper.wrap(
  [],
    async (req, res) => {
      const productData = await this.services.getProductList(req)

      if (productData.success) {
        res.status(200).json(productData);
      } else {
        this.error("product created errror");
      }
    }
  );
}

export default ProductController;
