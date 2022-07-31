import React from "react";
import ResetPasswordForm from "../../components/auth/ResetPasswordForm";
import Auth from "../../layouts/auth";

export default class ResetPassword extends React.Component<any, any> {
  render() {
    return (
        <Auth>
          <ResetPasswordForm />
        </Auth>
    );
  }
}
