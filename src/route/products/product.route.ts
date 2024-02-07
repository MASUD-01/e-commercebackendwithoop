import multer from "multer";
import AbstractRouter from "../../abstract/abstract.routers";
import ProductController from "./product.controller";
import path from "path";
const upload = multer({ dest: 'uploads/' })
class ProductRoute extends AbstractRouter {
    private productController= new ProductController()

    constructor() {
        super();
        this.initRouters();
      }

      initRouters(){
        this.routers.post('/createProduct',upload.single('file'),this.productController.createProduct)
        this.routers.get('/getProduct',this.productController.getProductList)
      }

}

export default ProductRoute