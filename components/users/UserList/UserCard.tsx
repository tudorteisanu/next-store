import { Component } from "react";
import {PageRoutes} from "../../../ts/enum";
import NavLink from "next/link";

interface IProps {
  user: any;
}

export default class UserCard extends Component<IProps> {
  render() {
    return (
      <div className="col-span-1 flex flex-col text-center bg-white shadow divide-y divide-gray-200 h-full rounded-md">
        <NavLink href={`${PageRoutes.Users}/${this.props.user.id}`}>
          <div className="flex-1 h-full flex flex-col justify-between ">
          {/*<div className="h-full">*/}
          {/*  <img*/}
          {/*    className="w-full max-h-[20rem] h-full object-cover flex-shrink-0 mx-auto rounded-t-md"*/}
          {/*    src={this.props.user?.name}*/}
          {/*    alt={this.props.user.name}*/}
          {/*  />*/}
          {/*</div>*/}
          <div>
            <div className="text-gray-600 text-sm p-4 font-medium">
              {this.props.user.name}
            </div>
            <div className="ext-gray-600 text-sm p-4 font-medium">
              {this.props.user.email}
            </div>
          </div>
        </div>
        </NavLink>
      </div>
    );
  }
}
