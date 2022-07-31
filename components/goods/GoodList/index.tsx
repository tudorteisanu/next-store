import { Component } from "react";
import GoodCard from "./GoodCard";

interface IState {}

interface IProps {
  goods: Array<any>;
}

export default class GoodList extends Component<IProps, IState> {
  render() {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {this.props.goods.map((good: any, index: number) => (
          <GoodCard good={good} key={index} />
        ))}
      </div>
    );
  }
}
