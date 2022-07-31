import React, {Component} from "react";
import UserCard from "./UserCard";

interface IState {
}

interface IProps {
  users: Array<any>;
}

export default class UserList extends Component<IProps, IState> {
  render() {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {this.props.users.map((user: any, index: number) => (
            <UserCard user={user} key={index}/>
        ))}
      </div>
    );
  }
}
