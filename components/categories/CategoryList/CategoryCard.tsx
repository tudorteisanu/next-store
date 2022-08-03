import { Component } from "react";
import {PageRoutes} from "../../../ts/enum";
import NavLink from "next/link";
import {CategoryInterface} from "../../../ts/interfaces";
import ImagePreview from "../../base/ImagePreview";

interface IProps {
  category: CategoryInterface;
}

export default class CategoryCard extends Component<IProps> {
  get imageSrc(): string {
    return  this.props.category?.photo?.url || ''
  }

  render() {
    return (
      <div className="col-span-1 flex flex-col text-center bg-white shadow divide-y divide-gray-200 h-full rounded-md">
        <NavLink href={`${PageRoutes.Categories}/${this.props.category.id}`}>
          <div className="flex-1 h-full flex flex-col justify-between ">
          <div className="h-full">
            <ImagePreview
              photo={this.props.category.photo}
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
