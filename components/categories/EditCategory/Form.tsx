import {Component} from "react";
import FormInput from "../../form/FormInput";
import FileUploader from "../../form/FIleUploader";
import Button from "../../form/Button";
import {PageRoutes} from "../../../ts/enum";
import {connect} from "react-redux";
import {fetchCategoryById, updateCategoryById} from "../../../store/actions";
import {Router, withRouter} from "next/router";
import {CategoryInterface} from "../../../ts/interfaces";
import {ExcludeRouterProps} from "next/dist/client/with-router";

interface FormProps extends ExcludeRouterProps<any> {
  fetchCategoryById: (id: number) => Promise<CategoryInterface>,
  categoryId: number;
  updateCategoryById: (id: number, payload: CategoryInterface) => Promise<void>
  router: Router
}

interface FormState {
  form: CategoryInterface;
  errors: Record<string, Array<string>>
}

class Form extends Component<FormProps, FormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      form: {
        name: '',
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
        ...this.state.form,
        photoId
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

      await this.props.updateCategoryById(this.props.categoryId, this.state.form)
      await this.props.router.push(PageRoutes.Categories)
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
        <Button onClick={(e)=> e}>
          <span>Submit</span>
        </Button>
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
