import {Component} from "react";
import FormInput from "../../form/FormInput";
import FileUploader from "../../form/FIleUploader";
import Button from "../../form/Button";
import {PageRoutes} from "../../../ts/enum";
import {connect} from "react-redux";
import {fetchCategoryById, updateCategoryById} from "../../../store/actions/categories";
import {withRouter} from "next/router";

class Form extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      form: {
        name: '',
        photo: {},
      },
      errors: {}
    }
  }

  async componentDidMount() {
    const {name, photo} = await this.props.fetchCategoryById(this.props.categoryId)

    this.setState({
      ...this.state,
      form: {
        name,
        photo
      }
    })
  }

  setFile(photoId: number) {
    this.setState({
      ...this.state, form: {
        ...this.state.form, photoId
      }
    });
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

      await this.props.updateCategoryById(this.props.categoryId, model)
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
          label="Name"
          errorMessages={this.state.errors.name}
          value={this.state.form.name}
          onInput={(e: any) => this.onInput(e, "name")}
        />
        <FileUploader onUpload={(e: any) => this.setFile(e)} file={this.state.form.photo}/>
        <Button>Submit</Button>
      </form>
    );
  }
}


const mapStateToProps = (state: any, ownProps: any) => {
  return {
    category: state.categories.items.find((item: any) => item.id === ownProps.categoryId),
  }
}

export default connect(mapStateToProps, {fetchCategoryById, updateCategoryById})(withRouter(Form))
