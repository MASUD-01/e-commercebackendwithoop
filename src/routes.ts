import { Application } from 'express';
import AuthRoute from './route/auth/auth.route';
import ProductRoute from './route/products/product.route';
import OrderRoute from './route/orderItem/order.route';

const routes = (app: Application) => {
  //Auth
   app.use('/api/v1/auth', new AuthRoute().routers);
   //product
   app.use('/api/v1/product', new ProductRoute().routers);
   //orderItem
   app.use('/api/v1/order', new OrderRoute().routers);

};

export default routes;
