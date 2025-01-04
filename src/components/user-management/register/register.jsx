import React from "react";
import TSButton from "../../generic/button/ts-button";
import { NavLink } from "react-router-dom";
import usePost from "../../../hooks/api/usePost";
import useFormResolver from "../../../hooks/validators/use-form-resolver";
import { registerSchema } from "./register-schema";
import TSInput from "../../generic/input/ts-input";
import TSPassword from "../../generic/password/ts-password";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormResolver(registerSchema, "onSubmit");

  const { post, loading, error } = usePost();

  const onSubmit = async (data) => {
    var payload = JSON.stringify(data);
    var response = await post("user/create", payload);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <TSInput
            {...register("userName")}
            label="username"
            error={errors.userName}
          />
          <TSInput {...register("email")} error={errors.email} label="email" />
          <TSPassword
            {...register("password")}
            error={errors.password}
            label="password"
          />
          <TSInput
            {...register("mobile")}
            label="mobile"
            error={errors.mobile}
          />
          <div>
            <TSButton title="Sign In"></TSButton>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          <NavLink
            to="/login"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
          >
            Existing user Login <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default Register;
