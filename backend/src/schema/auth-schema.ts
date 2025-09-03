import joi from "joi";
import { LoginDTO, RegisterDTO } from "../dtos/dto";

const Register = joi.object<RegisterDTO>({
  email: joi.string().email().required(),
  name: joi.string().required(),
  gender: joi.string().valid("Male", "Female").required(),
  password: joi.string().min(6).required(),
});

const Login = joi.object<LoginDTO>({
  email: joi.string().required(),
  password: joi.string().min(6).required(),
});

export { Login, Register };
