import { Request } from 'express';
import { Knex } from 'knex';
import { db } from '../../database';
import AuthModel from '../../route/auth/auth.models';
import ProductModel from '../../route/products/product.models';
import OrderModel from '../../route/orderItem/order.models';

class Models {
  public db = db;

  public authModel(req: Request, trx?: Knex.Transaction) {
    return new AuthModel(trx || this.db, req);
  }
  public productModel(req: Request, trx?: Knex.Transaction) {
    return new ProductModel(trx || this.db, req);
  }
  public orderModel(req: Request, trx?: Knex.Transaction) {
    return new OrderModel(trx || this.db, req);
  }
}

export default Models;
