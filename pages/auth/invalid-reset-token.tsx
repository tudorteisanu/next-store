import React from "react";
import Error from "../../components/auth/Error";
import Auth from "../../layouts/auth";

export default class InvalidResetToken extends React.Component<any, any> {
  render() {
    return (
        <Auth>
          <Error
          title="Invalid reset token"
          text="Token validity expired or bad token, please, try again"
        />
        </Auth>
    );
  }
}
