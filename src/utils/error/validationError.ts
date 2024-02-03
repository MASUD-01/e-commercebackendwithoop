import { Result, ValidationError } from 'express-validator';

interface IError {
  status: number;
  type: string;
}

class ValidationErr extends Error implements IError {
  status: number;
  type: string;

  constructor(error: Result<ValidationError>) {
    console.log(error,'__)0))))');
    
    super(error.array()[0].msg);
    (this.status = 400),
      (this.type = `Invalid input type for '${error.array()[1].msg}'`);
  }
}

export default ValidationErr;
