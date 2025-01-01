import TSButton from "../../generic/button/ts-button";
import TSEmail from "../../generic/email/ts-email";
import TSPassword from "../../generic/password/ts-password";
import { NavLink } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="#" method="POST" className="space-y-6">
          <TSEmail></TSEmail>     
          <TSPassword></TSPassword>
          <div>
            <TSButton title="Sign In"></TSButton>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">          
          <NavLink to='/register' className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
            Register <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
