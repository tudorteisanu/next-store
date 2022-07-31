import {Component} from "react";
import Default from "../../layouts/default";
import {connect} from "react-redux";
import {fetchUserById} from "../../store/actions/users";
import EditUser from "../../components/users/EditUser";

class Edit extends Component<any, any> {
  static getInitialProps(ctx: any) {
    const { id } = ctx.query
    if (id) {
      return {id: Number(id)}
    }
    return {}
  }

  render() {
    return (
      <Default>
        <div className="sm:max-w-lg mx-auto">
          <EditUser userId={this.props.id}/>
        </div>
      </Default>
    );
  }
}


const mapStateToProps = (state: any) => {
  return {
    loading: state.users.loading,
  };
};

export default connect(mapStateToProps, {fetchUserById})(Edit)
