import { check } from "express-validator";

class OrderValidator {
  createOrder = [
    check("productId")
      .isNumeric()
      .notEmpty()
      .withMessage("Enter your productId"),
    check("userId").isNumeric().notEmpty().withMessage("Enter your userId"),
  ];
}

export default OrderValidator;
