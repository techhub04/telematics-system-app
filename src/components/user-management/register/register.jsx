import React, { useRef } from "react";
import TSButton from "../../generic/button/ts-button";
import TSEmail from "../../generic/email/ts-email";
import TSPassword from "../../generic/password/ts-password";
import TSPhoneInput from "../../generic/phone-input/ts-phone-input";
import { NavLink } from "react-router-dom";
import usePost from "../../../hooks/api/usePost";

const Register = () => {
  const formRef = useRef(null);
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const phoneInputRef = useRef("");
  const { post, loading, error } = usePost();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formRef.current.checkValidity()) {
   
      const phoneValues = phoneInputRef.current.getValues();
      var data = {
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        phone: phoneValues.selectedCountry.code + phoneValues.phoneNumber,
      };
      var payload = JSON.stringify(data);
      var response = await post("user/create", payload);      
    } else {
      formRef.current.reportValidity();
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Register
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" ref={formRef}>
          <TSEmail ref={emailInputRef}></TSEmail>
          <TSPassword ref={passwordInputRef}></TSPassword>
          <TSPhoneInput ref={phoneInputRef}></TSPhoneInput>
          <div>
            <TSButton title="Sign In" onClick={handleSubmit}></TSButton>
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
