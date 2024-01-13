
import AbstractModels from '../../abstract/abstract.models';
import { IRegistration } from './auth.type';

class AuthModel extends AbstractModels {
  async login({emailorPhone,isEmailOrPhone}:{emailorPhone:string,isEmailOrPhone:'email'|'phone'}) {
    const [user] = await this.query()
      .select(
        'userId',
        'email',
        'password',
         'name',
         'phoneNumber',
        // this.db.raw("concat(first_name, ' ', last_name) AS name")
      )
      .from('user')
      .where(isEmailOrPhone==='email'?{ email: emailorPhone }:{phoneNumber:emailorPhone});

    return user as {
      user_id: number;
      email: string;
      password: string;
      name: string;
    };
  }

  async checkExistingEmail(email: string) {
    const [result] = await this.query()
      .select('userId', 'email')
      .from('user')
      .where({ email: email });
    return result as { userId: number; email: string };
  }
  async  validateEmailOrPhoneNumber(input:string){
    // Regular expressions for email and phone number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;
  
    // Remove leading/trailing whitespaces
    const cleanedInput = input.trim();
  
    // Check if the input matches the email or phone number pattern
    if (emailRegex.test(cleanedInput)) {
      return 'Email';
    } else if (phoneRegex.test(cleanedInput)) {
      return 'Phone';
    } 
  }
  async checkExistingPhoneNumber(phoneNumber: string) {
    const [result] = await this.query()
      .select('userId', 'phoneNumber')
      .from('user')
      .where({ phoneNumber: phoneNumber });
    return result as { userId: number; email: string };
  }

  async signUp(userInfo: IRegistration) {
    const [id] = await this.query().insert(userInfo).into('user');
    return { userId: id } as { userId: number };
  }

  async updateToken(user_id: number, otp: number, otp_expired: number) {
    const result = await this.query()
      .update({
        otp: otp,
        otp_expired: otp_expired,
      })
      .into('users1')
      .where({ user_id: user_id });

    return result;
  }

  async getToken(email: string, user_id: number) {
    const [result] = await this.query()
      .select('otp', 'otp_expired')
      .from('users')
      .where({ user_id: user_id })
      .andWhere({ email: email });

    return result as { otp: number; otp_expired: number };
  }

  async updatePassword(user_id: number, password: string) {
    const result = await this.query()
      .update({
        password: password,
      })
      .into('users')
      .where({ user_id: user_id });

    return result;
  }
}

export default AuthModel;