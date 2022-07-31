import {Component} from "react";
import {PageRoutes} from "../../../ts/enum";
import FormInput from "../../form/FormInput";
import Card from "../../base/Card";
import CardHeading from "../../base/CardHeading";
import FileUploader from "../../form/FIleUploader";
import Button from "../../form/Button";
import FormTextarea from "../../form/FormTextarea";
import FormSelect from "../../form/FormSelect";
import {withRouter} from "next/router";
import {createGood} from '../../../store/actions/goods'
import {connect} from "react-redux";

class CreateGood extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      model: {} as any,
      errors: {}
    };
  }

  setFile(photoId: number) {
    this.setState({...this.state, model: {...this.state.model, photoId}});
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      errors: {
        ...this.state.errors,
        [key]: null
      },
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
      await this.props.createGood(model)
      this.setState({model: {}});
      this.props.router.push(PageRoutes.Goods)
    } catch (e: any) {
      if (e.hasOwnProperty('errors')) {
        this.setState({
          ...this.state,
          errors: e.errors
        })
      }

    }
  };

  get title() {
    return "Create good";
  }

  render() {
    return (
      <Card>
        <CardHeading title={this.title}/>
        <form onSubmit={this.submit}>
          <FormInput
            label="Name"
            errorMessages={this.state.errors.name}
            onInput={(e: any) => this.onInput(e, "name")}
          />
          <FormTextarea
            label="Description"
            errorMessages={this.state.errors.description}
            onInput={(e: any) => this.onInput(e, "description")}
          />
          <FormInput
            label="Price"
            type="number"
            errorMessages={this.state.errors.price}
            onInput={(e: any) => this.onInput(e, "price")}
          />
          <FormInput
            label="Discount"
            type="number"
            errorMessages={this.state.errors.discount}
            onInput={(e: any) => this.onInput(e, "discount")}
          />
          <FormSelect
            items={[
              {value: 1, text: "Category 1"},
              {value: 2, text: "Category 2"},
              {value: 3, text: "Category 3"},
            ]}
            label="Category id"
            type="number"
            errorMessages={this.state.errors.categoryId}
            onChange={(e: any) => this.onInput(e, "categoryId")}
          />
          <FileUploader
            errorMessages={this.state.errors.photoId} onUpload={(e: any) => this.setFile(e)}/>
          <Button>Submit</Button>
        </form>
      </Card>
    );
  }
}

export default connect(null, {createGood})(withRouter(CreateGood))
