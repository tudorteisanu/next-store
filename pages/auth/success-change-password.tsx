import React from "react";
import Error from "../../components/auth/Error";
import Auth from "../../layouts/auth";

export default class SuccessChangePassword extends React.Component<any, any> {
  render() {
    return (
        <Auth>
          <Error
            title="Successful changed password!"
            text="Next go to login for auth."
          />
        </Auth>
    );
  }
}
