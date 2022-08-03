import React, {Component} from "react";
import CategoryCard from "./CategoryCard";
import {CategoryInterface} from "../../../ts/interfaces";

interface CategoryListState {
}

interface CategoryListProps {
  categories: Array<CategoryInterface>;
}

export default class CategoryList extends Component<CategoryListProps, CategoryListState> {
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
