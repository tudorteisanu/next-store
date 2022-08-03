import {Component} from "react";
import FormInput from "../../form/FormInput";
import Button from "../../form/Button";
import {PageRoutes} from "../../../ts/enum";
import {connect} from "react-redux";
import {fetchUserById, updateUserById} from "../../../store/actions";
import {withRouter} from "next/router";

class Form extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      form: {
        name: '',
        email: '',
      },
      errors: {}
    }
  }

  async componentDidMount() {
    console.log(this.props)
    const response = await this.props.fetchUserById(this.props.userId)
    this.setState({
      ...this.state,
      form: {
        ...response
      }
    })
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [key]: event.target.value,
      },
    });
  }

  submit = async (e: any): Promise<void> => {
    try {
      e.preventDefault();

      const model = {} as Record<string, string | number>;

      Object.keys(this.state.form).map((key: string) => {
        if (Number(this.state.form[key])) {
          model[key] = Number(this.state.form[key]);
        } else {
          model[key] = this.state.form[key];
        }
        return key;
      });

      await this.props.updateUserById(this.props.userId, model)
      await this.props.router.push(PageRoutes.Home)
    } catch (e: any) {
      if (e.hasOwnProperty('errors')) {
        this.setState({...this.state, errors: e.errors})
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <FormInput
          errorMessages={this.state.errors.name}
          label="Name"
          value={this.state.form.name}
          onInput={(e: any) => this.onInput(e, "name")}
        />
        <FormInput
          errorMessages={this.state.errors.email}
          label="Email"
          value={this.state.form.email}
          onInput={(e: any) => this.onInput(e, "email")}
        />
        <div className="mt-2">
          <Button > Submit</Button>
        </div>
      </form>
    );
  }
}

export default connect(null, {fetchUserById, updateUserById})(withRouter(Form))
