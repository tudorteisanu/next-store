import {Component} from "react";
import {PageRoutes} from "../../../ts/enum";
import NavLink from "next/link";

interface IProps {
  good: any;
}

export default class GoodCard extends Component<IProps> {
  render() {
    return (
      <div
        className="col-span-1 flex flex-col text-center bg-white shadow divide-y divide-gray-200 h-full rounded-md">
        <NavLink href={`${PageRoutes.Goods}/${this.props.good.id}`}>
          <div className="flex-1 flex flex-col justify-between ">
            <div className="h-full">
              <img
                className="w-full max-h-[20rem] h-full object-cover flex-shrink-0 mx-auto rounded-md"
                src={this.props.good?.photo?.url}
                alt={this.props.good.name}
              />
            </div>
            <div>
              <h3 className="mt-4 text-gray-900 text-sm font-medium">
                {this.props.good.name}
              </h3>
              <div className="text-gray-900 text-xl font-black mt-1 pb-4">
                {this.props.good.price} MDL
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}
