import AbstractController from "../../abstract/abstract.controllers";
import ProductServices from "./product.service";
import ProductValidator from "./product.validator";
const fs = require('fs');
class ProductController extends AbstractController {
  private services = new ProductServices();
  private validator = new ProductValidator();
  constructor() {
    super();
  }
  public createProduct = this.assyncWrapper.wrap(
   []/*  this.validator.createProudct */,
    async (req, res) => {
   
      try {
        const binaryData =await fs.readFileSync(req?.file?.path);

        // Convert binary data to Base64
        const base64Data =await  binaryData.toString('base64');
        console.log(req.file,req.body,'-----19-----')
        const apiKey = 'a65cc6d7cfe7a78a09d1f41dfcc553fe'; // Replace with your imgBB API key
        const apiUrl = 'https://api.imgbb.com/1/upload';
    
        const formData = new FormData();
        formData.append('image', base64Data);
    
        const response = await fetch(`${apiUrl}?key=${apiKey}`, {
          method: 'POST',
          body: formData,
        });
      
        const responseData = await response.json();
        console.log(responseData)
        if (response.ok) {
          const imageUrl = responseData.data.url;
          res.json(imageUrl)
          console.log('Image uploaded successfully. URL:', imageUrl);
          return imageUrl;
        } else {
          throw new Error(`Error uploading image to imgBB: ${responseData.error.message}`);
        }
      } catch (error) {
        console.error('Error uploading image to imgBB:', error);
        throw error;
      }
      // const productData = await this.services.productCreate(req, res);

      // if (productData.success) {
      //   res.status(200).json(productData);
      // } else {
      //   this.error("product created errror");
      // }
    }
  );
  public getProductList = this.assyncWrapper.wrap(
  [],
    async (req, res) => {
      const productData = await this.services.getProductList(req)

      if (productData.success) {
        res.status(200).json(productData);
      } else {
        this.error("product created errror");
      }
    }
  );
}

export default ProductController;
