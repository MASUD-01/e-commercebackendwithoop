import AbstractController from "../../abstract/abstract.controllers";
import OrderServices from "./order.service";
import OrderValidator from "./order.validator";


class OrderController extends AbstractController {
  private services = new OrderServices();
  private validator = new OrderValidator();
  constructor() {
    super();
  }
  public createOrder = this.assyncWrapper.wrap(
    this.validator.createOrder,
    async (req, res) => {
      const orderData = await this.services.orderCreate(req, res);

      if (orderData.success) {
        res.status(200).json(orderData);
      } else {
        this.error("Order created errror");
      }
    }
  );
  public getOrderList = this.assyncWrapper.wrap(
  [],
    async (req, res) => {
      const orderData = await this.services.getOrderList(req)

      if (orderData.success) {
        res.status(200).json(orderData);
      } else {
        this.error("product created errror");
      }
    }
  );
}

export default OrderController;
