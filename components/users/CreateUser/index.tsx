import {Component} from "react";
import {PageRoutes} from "../../../ts/enum";
import FormInput from "../../form/FormInput";
import Card from "../../base/Card";
import CardHeading from "../../base/CardHeading";
import Button from "../../form/Button";
import {withRouter} from "next/router";
import {createUser} from '../../../store/actions/users';
import {connect} from "react-redux";

class CreateUser extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      model: {} as any,
      errors: {}
    };
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      form: {...this.state.form, [key]: event.target.value},
    });
  }

  submit = async (e: any): Promise<void> => {
    try {
      e.preventDefault();

      const form = {} as Record<string, string | number>;

      Object.keys(this.state.form).map((key: string) => {
        if (Number(this.state.form[key])) {
          form[key] = Number(this.state.form[key]);
        } else {
          form[key] = this.state.form[key];
        }
        return key;
      });

      await this.props.createUser(form);
      await this.props.router.push(PageRoutes.Users);
    } catch (e: any) {
      if (e.hasOwnProperty('errors')) {
        this.setState({...this.state, errors: e.errors})
      }
    }
  };

  get title() {
    return "Create category";
  }

  render() {
    return (
      <Card>
        <CardHeading title={this.title}/>
        <form onSubmit={this.submit}>
          <FormInput
            errorMessages={this.state.errors.name}
            label="Name"
            onInput={(e: any) => this.onInput(e, "name")}
          />
          <FormInput
            errorMessages={this.state.errors.email}
            label="Email"
            onInput={(e: any) => this.onInput(e, "email")}
          />
          <FormInput
            errorMessages={this.state.errors.password}
            label="Password"
            type="password"
            onInput={(e: any) => this.onInput(e, "password")}
          />
          <div className="mt-2">
            <Button>Submit</Button>
          </div>
        </form>
      </Card>
    );
  }
}


export default connect(null, {createUser})(withRouter(CreateUser))
