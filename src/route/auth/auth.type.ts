export interface ILogin {
    emailorPhone: string;
    password: string;
  }
  
  export interface IRegistration {
    email: string;
    password: string;
    name: string,
    birthday?:string ,
    phoneNumber:string ,
    gender?: 'male'|'female' |null
  }