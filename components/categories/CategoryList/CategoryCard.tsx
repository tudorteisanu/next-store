import { Component } from "react";
import {PageRoutes} from "../../../ts/enum";
import NavLink from "next/link";

interface IProps {
  category: any;
}

export default class CategoryCard extends Component<IProps> {
  render() {
    return (
      <div className="col-span-1 flex flex-col text-center bg-white shadow divide-y divide-gray-200 h-full rounded-md">
        <NavLink href={`${PageRoutes.Categories}/${this.props.category.id}`}>
          <div className="flex-1 h-full flex flex-col justify-between ">
          <div className="h-full">
            <img
              className="w-full max-h-[20rem] h-full object-cover flex-shrink-0 mx-auto rounded-t-md"
              src={this.props.category?.photo?.url}
              alt={this.props.category.name}
            />
          </div>
          <div>
            <h3 className="text-gray-600 text-sm p-4 font-medium">
              {this.props.category.name}
            </h3>
          </div>
        </div>
        </NavLink>
      </div>
    );
  }
}
