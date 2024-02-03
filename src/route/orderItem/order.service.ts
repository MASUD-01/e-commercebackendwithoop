import { Response, Request } from "express";
import AbstractServices from "../../abstract/abstract.service";

class OrderServices extends AbstractServices {
  public async orderCreate(req: Request, res: Response) {
    const Order = req.body;
    return await this.models.db.transaction(async (trx) => {
      const order_conn = this.models.orderModel(req);
      const order = await order_conn.createOrder(Order);
      return {
        success: true,
        message: "Order has been created successfully",
        data: { ...Order, productId: order[0] },
      };
    });
  }
  public async getOrderList(req: Request) {
    return await this.models.db.transaction(async (trx) => {
      const product_conn = this.models.orderModel(req);
      const product = await product_conn.getOrderList();
      return {
        success: true,
        message: "order has been retrive successfully",
        data: product,
      };
    });
  }
}

export default OrderServices;
