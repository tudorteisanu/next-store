import React from "react";
import FormInput from "../form/FormInput";
import Button from "../form/Button";
import Card from "../base/Card";
import CardHeading from "../base/CardHeading";
import HttpService from "../../services/http";
import {ApiRoutes, PageRoutes} from "../../ts/enum";

export default class ForgotPasswordForm extends React.Component<any, any> {
  private http;

  constructor(props: any) {
    super(props);
    this.state = {
      form: { email: "" },
    };
    this.http = HttpService;
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: event.target.value },
    });
  }

  submit = async (event: any): Promise<void> => {
    try {
      event.preventDefault();
      await this.http.post(ApiRoutes.ForgotPassword, this.state.form);
      await this.props.router.push(PageRoutes.Login)
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Card header={<CardHeading title={"Forgot your password"} />}>
        <form className="space-y-6" onSubmit={this.submit}>
          <FormInput
            label={"Email"}
            onInput={(e: any) => this.onInput(e, "email")}
          />

          <div>
            <Button>Reset password</Button>
          </div>
        </form>
      </Card>
    );
  }
}
