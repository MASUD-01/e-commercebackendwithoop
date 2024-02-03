import AbstractRouter from "../../abstract/abstract.routers";
import OrderController from "./order.controller";

class OrderRoute extends AbstractRouter {
    private orderController= new OrderController()

    constructor() {
        super();
        this.initRouters();
      }

      initRouters(){
        this.routers.post('/createOrder',this.orderController.createOrder)
       this.routers.get('/getOrder',this.orderController.getOrderList)
      }

}

export default OrderRoute