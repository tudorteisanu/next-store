import {Component} from "react";
import http from "../../../services/http";
import {ApiRoutes, PageRoutes} from "../../../ts/enum";
import FormInput from "../../form/FormInput";
import Card from "../../base/Card";
import CardHeading from "../../base/CardHeading";
import FileUploader from "../../form/FIleUploader";
import Button from "../../form/Button";
import {Router, withRouter} from "next/router";
import {CategoryInterface} from "../../../ts/interfaces";

interface CreateCategoryProps {
  router: Router
  children?: JSX.Element
}

interface CreateCategoryState {
  model: CategoryInterface;
  submitted: boolean;
  errors: Record<string, Array<string>>;
  [key: string]: any
}

class CreateCategory extends Component<CreateCategoryProps, CreateCategoryState> {
  constructor(props: any) {
    super(props);
    this.state = {
      model: {
        name: '',
      },
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
      const {model} = this.state;
      const newModel: Partial<CategoryInterface> = {
        ...this.state.model,
        photoId: Number(model.photoId)
      }
      e.preventDefault();

      await http.post(ApiRoutes.Categories, newModel);
      this.setState({submitted: true, model: {name: ''}});
      await this.props.router.push(PageRoutes.Categories)
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
        <div>
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
        </div>
      </Card>
    );
  }
}


export default withRouter(CreateCategory)
