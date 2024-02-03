import AbstractModels from "../../abstract/abstract.models";
import { IOrder } from "./order.type";

class OrderModel extends AbstractModels {
  async createOrder(orderinfo: IOrder) {
    const order = await this.query().insert(orderinfo).into("order");
    return order;
  }
  async getOrderList() {

    const products = await this.query() .select(
    'email',
    'gender',
    'price',
    'phoneNumber',
      'user.name as userName',
      'product.name as productName',
      // Add other columns from the `order` table as needed
    ).from('order').join('user', 'order.userId', '=', 'user.userId')
    .join('product', 'order.productId', '=', 'product.productId')

    return products;
  }
}

export default OrderModel;
