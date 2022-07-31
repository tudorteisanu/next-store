import React from "react";
import FormInput from "../form/FormInput";
import NavLink from 'next/link';
import { ApiRoutes, PageRoutes } from "../../ts/enum";
import Button from "../form/Button";
import Checkbox from "../form/Checkbox";
import Card from "../base/Card";
import LoginFooter from "./LoginFooter";
import CardHeading from "../base/CardHeading";
import http from "../../services/http";
import { connect } from "react-redux";
import { login } from "../../store/actions/auth";

class LoginForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      form: { email: "teisanutudort@gmail.com", password: "123456789" },
    };
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      form: { ...this.state.form, [key]: event.target.value },
    });
  }

  async login(event: any): Promise<void> {
    try {
      event.preventDefault();
      const response: any = await http.post(ApiRoutes.Login, this.state.form);
      this.props.login(response);
    } catch (e: any) {
      this.setState({ ...this.state, errorMessage: e?.message });

      setTimeout(() => {
        this.setState({ ...this.state, errorMessage: null });
      }, 5000);
    }
  }
  render() {
    return (
      <Card
        footer={<LoginFooter />}
        header={
          <CardHeading
            title={"Sign in to your account"}
            subTitle={"or start your 14-day free trial"}
          />
        }
      >
        {" "}
        <form
          className="space-y-6"
          onSubmit={(event: any) => this.login(event)}
        >
          <div className="w-full">
            <FormInput
              value={this.props.form?.email}
              label={"Email"}
              onInput={(e: any) => this.onInput(e, "email")}
            />
          </div>
          <FormInput
            value={this.props.form?.password}
            label="Password"
            type="password"
            onInput={(e: any) => this.onInput(e, "password")}
          />

          <div className="flex items-center justify-between">
            <Checkbox label="Remember me" />
            <div className="text-sm">
              <NavLink
                href={PageRoutes.ForgotPassword}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </NavLink>
            </div>
          </div>

          <div>
            <Button>Sing in</Button>
          </div>
          <div>
            {this.state.errorMessage ? (
              <div className="w-full text-center border border-red-500 p-2 transition-all rounded-md">
                <span className="text-red-500 ">{this.state.errorMessage}</span>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </form>
      </Card>
    );
  }
}

export default connect(null, { login })(LoginForm);
