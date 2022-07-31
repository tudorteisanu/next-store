import React, {Component} from "react";
import CategoryCard from "./CategoryCard";

interface IState {
}

interface IProps {
  categories: Array<any>;
}

export default class CategoryList extends Component<IProps, IState> {
  render() {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {this.props.categories.map((category: any, index: number) => (
            <CategoryCard category={category} key={index}/>
        ))}
      </div>
    );
  }
}
