import AbstractModels from "../../abstract/abstract.models";
import { IproductInfo } from "./product.type";

class ProductModel extends AbstractModels{
    async createProudct(productinfo:IproductInfo){
        const product= await this.query().insert(productinfo).into('product')
        console.log(product,'proudct')
        return product
    }

}

export default ProductModel