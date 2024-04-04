import LoginForm from "@/components/loginForm/loginForm";
import { handleGitHudLogin, login } from "@/lib/action";

const LoginPage =  () => {
  return (
    <div className="flex justify-center items-center space-y-5">
      <div className="w-1/2 px-8 py-6 rounded-md bg-color-dark-soft">
        <div className="my-2">
          <form
            className="bg-white flex justify-center text-black rounded hover:opacity-70 py-2"
            action={handleGitHudLogin}
          >
            <button> Login with GitHub</button>
          </form>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
