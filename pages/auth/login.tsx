import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import Auth from "../../layouts/auth";

export default class Login extends React.Component<any, any> {
  render() {
    return (
        <Auth>
          <LoginForm />
        </Auth>
    );
  }
}
