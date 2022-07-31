import {Component} from "react";
import FormInput from "../../form/FormInput";
import FileUploader from "../../form/FIleUploader";
import Button from "../../form/Button";
import {connect} from "react-redux";
import {fetchGoodById, updateGoodById} from "../../../store/actions/goods";
import FormTextarea from "../../form/FormTextarea";
import FormSelect from "../../form/FormSelect";
import {withRouter} from "next/router";
import {PageRoutes} from "../../../ts/enum";

class Form extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: '',
      price: '',
      discount: '',
      categoryId: '',
      description: '',
      photo: {}
    }
  }

  async componentDidMount() {
    const response = await this.props.fetchGoodById(this.props.goodId)

    this.setState({
      ...this.state,
      ...response
  })
  }

  setFile(photoId: number) {
    this.setState({...this.state, photoId});
  }

  onInput(event: any, key: string): void {
    this.setState({
      ...this.state,
      [key]: event.target.value,
    });
  }

  submit = async (e: any): Promise<void> => {
    try {
      e.preventDefault();

      const model = {} as Record<string, string | number>;

      Object.keys(this.state).map((key: string) => {
        if (Number(this.state[key])) {
          model[key] = Number(this.state[key]);
        } else {
          model[key] = this.state[key];
        }
        return key;
      });

      this.props.updateGoodById(this.props.goodId, model);
      this.props.router.push(PageRoutes.Goods);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <FormInput
          label="Name"
          value={this.state.name}
          onInput={(e: any) => this.onInput(e, "name")}
        />
        <FormTextarea
          label="Description"
          value={this.state.description}
          onInput={(e: any) => this.onInput(e, "description")}
        />
        <FormInput
          label="Price"
          type="number"
          value={this.state.price}
          onInput={(e: any) => this.onInput(e, "price")}
        />
        <FormInput
          value={this.state.discount}
          label="Discount"
          type="number"
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
          value={this.state.categoryId}
          onChange={(e: any) => this.onInput(e, "categoryId")}
        />
        <FileUploader onUpload={(e: any) => this.setFile(e)} file={this.state.photo}/>
        <Button>Submit</Button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  fetchGoodById,
  updateGoodById
}

export default connect(null, mapDispatchToProps)(withRouter(Form))
