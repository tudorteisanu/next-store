import React from "react";
import Default from "../../layouts/default";
import NavLink from "next/link";
import {PageRoutes} from "../../ts/enum";
import {connect} from "react-redux";
import UserList from "../../components/users/UserList";
import {fetchUsers} from "../../store/actions/users";

class Users extends React.Component<any, any> {
  async componentDidMount() {
    await this.props.fetchUsers()
  }

  render() {
    return (
      <Default>
        <div className="sm:max-w-5xl p-10 mx-auto">
            <NavLink href={PageRoutes.UsersCreate}>
              <button className="bg-blue-700 text-gray-100 py-2 px-5 rounded-md mb-3">Add user</button>
            </NavLink>
            <UserList users={this.props.users}/>
        </div>
      </Default>
    );
  }
}


const mapStateToProps = (state: any) => {
  return {
    users: state.users.items,
    loading: state.users.loading
  };
};

export default connect(mapStateToProps, {fetchUsers})(Users)
