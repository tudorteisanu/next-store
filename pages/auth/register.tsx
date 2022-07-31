import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";
import Auth from "../../layouts/auth";

export default class Login extends React.Component<any, any> {
  render() {
    return (
        <Auth>
             <RegisterForm />
        </Auth>
    );
  }
}
