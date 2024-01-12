import AbstractController from "../../abstract/abstract.controllers";
import ProductServices from "./product.service";
import ProductValidator from "./product.validator";

class ProductController extends AbstractController {
    private services = new ProductServices()
    private validator = new ProductValidator()
  constructor() {
    super();
  }
    public createProduct = this.assyncWrapper.wrap(
        this.validator.createProudct,
        async (req, res) => {
            const productData = await this.services.productCreate(req, res)

            if (productData.success
            ) {
                res.status(200).json(productData)
            }else{
                this.error('product created errror')
            }
        }
    )
}

export default ProductController