import {Component} from "react";
import http from "../../../services/http";
import {ApiRoutes, PageRoutes} from "../../../ts/enum";
import FormInput from "../../form/FormInput";
import Card from "../../base/Card";
import CardHeading from "../../base/CardHeading";
import FileUploader from "../../form/FIleUploader";
import Button from "../../form/Button";
import {withRouter} from "next/router";

class CreateCategory extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      model: {} as any,
      submitted: false,
      errors: {}
    };
  }

  setFile(photoId: number) {
    this.setState({...this.state, model: {...this.state.model, photoId}});
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      model: {...this.state.model, [key]: event.target.value},
    });
  }

  submit = async (e: any): Promise<void> => {
    try {
      const model = {} as Record<string, string | number>;

      Object.keys(this.state.model).map((key: string) => {
        if (Number(this.state.model[key])) {
          model[key] = Number(this.state.model[key]);
        } else {
          model[key] = this.state.model[key];
        }
        return key;
      });
      e.preventDefault();

      await http.post(ApiRoutes.Categories, model);
      this.setState({submitted: true, model: {}});
      await this.props.router.push(PageRoutes.Home)
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
          <FileUploader onUpload={(e: any) => this.setFile(e)}/>
          <Button>Submit</Button>
        </form>
      </Card>
    );
  }
}


export default withRouter(CreateCategory)
