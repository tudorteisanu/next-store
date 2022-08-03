import {Component} from "react";
import Default from "../../layouts/default";
import EditCategory from "../../components/categories/EditCategory";
import {connect} from "react-redux";
import {fetchCategoryById} from "../../store/actions";

class Edit extends Component<any, any> {
  static getInitialProps(ctx: any) {
    const { id } = ctx.query
    if (id) {
      return {id: Number(id)}
    }

    return {}
  }

  componentDidMount() {
    if (this.props.id) {
      this.props.fetchCategoryById(this.props.id)
    }
  }

  render() {
    return (
      <Default>
        <div className="sm:max-w-lg mx-auto">
          <EditCategory categoryId={this.props.id}/>
        </div>
      </Default>
    );
  }
}

export default connect(null, {fetchCategoryById})(Edit)
