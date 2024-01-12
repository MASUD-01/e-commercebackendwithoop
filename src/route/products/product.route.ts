import AbstractRouter from "../../abstract/abstract.routers";
import ProductController from "./product.controller";

class ProductRoute extends AbstractRouter {
    private productController= new ProductController()

    constructor() {
        super();
        this.initRouters();
      }

      initRouters(){
        this.routers.post('/createProduct',this.productController.createProduct)
      }

}

export default ProductRoute