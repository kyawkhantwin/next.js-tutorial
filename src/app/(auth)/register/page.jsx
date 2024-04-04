import RegisterForm from "@/components/registerForm/registerForm";
import { register } from "@/lib/action";

const RegisterPage = () => {
  return (
    <div className=" flex justify-center items-center">
    <RegisterForm/>
    </div>
  );
};

export default RegisterPage;
