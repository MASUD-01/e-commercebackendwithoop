import AbstractRouter from '../../abstract/abstract.routers';
import AuthController from './auth.controller';

class AuthRoute extends AbstractRouter {
  private authController = new AuthController();

  constructor() {
    super();
    this.initRouters();
  }
  initRouters() {
    this.routers
      .post('/login', this.authController.login)
      .post('/sign-up', this.authController.signUp)
      // .post('/sign-google', this.authController.signGoogle)
      // .post('/forgot-password', this.authController.forgotPassword)
      // .post('/verify-otp', this.authController.verifyOTP)
      // .post('/reset-password', this.authController.resetPassword);

    this.routers.get('/sign-out', this.authController.signOut);
  }
}
export default AuthRoute;