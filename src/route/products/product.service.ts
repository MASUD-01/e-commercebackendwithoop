import { Response ,Request} from "express";
import AbstractServices from "../../abstract/abstract.service";

class ProductServices extends AbstractServices{
public async productCreate(req:Request,res:Response){
    const Product=req.body

    return await this.models.db.transaction(async(trx)=>{
        const product_conn=this.models.productModel(req)
        const product=product_conn.createProudct(Product)
        console.log(product)
        return {
            success:true,
            data:{productId:product},
            message:'Product has been created successfully'
        }

    })

}
}

export default ProductServices