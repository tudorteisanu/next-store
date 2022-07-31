import React from "react";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm";
import Auth from "../../layouts/auth";

export default class ForgotPassword extends React.Component<any, any> {
  render() {
    return (
        <Auth>
          <ForgotPasswordForm />
        </Auth>);
  }
}
