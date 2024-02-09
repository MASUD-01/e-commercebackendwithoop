import { check } from "express-validator";

class ProductValidator{
    createProudct=[
        check('file').notEmpty().withMessage('Enter your image'),
        check('name').isString().notEmpty().withMessage('Enter your name'),
        check('price').isNumeric().notEmpty().withMessage('Enter your price'),
        check('discount').isString().notEmpty().withMessage('Enter your discount'),
    ]
}

export default ProductValidator