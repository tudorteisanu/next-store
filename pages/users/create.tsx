import React from "react";
import Default from "../../layouts/default";
import CreateUser from "../../components/users/CreateUser";
import {connect} from "react-redux";

class Create extends React.Component<any> {
  render() {
    return (
      <Default>
          <div className="sm:max-w-lg mx-auto">
            <CreateUser/>
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

export default connect(mapStateToProps, null)(Create)
