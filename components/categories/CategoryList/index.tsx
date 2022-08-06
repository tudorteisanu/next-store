import React, {Component} from "react";
import CategoryCard from "./CategoryCard";
import {CategoryInterface, GoodInterface} from "../../../ts/interfaces";
import Paginator from "../../layout/Paginator";
import {connect} from "react-redux";
import {fetchCategories} from "../../../store/actions";
import {PaginationQueryInterface} from "../../../ts/interfaces/pagination";

interface CategoryListState {
}

interface CategoryListProps {
  categories: Array<CategoryInterface>;
  data: Array<GoodInterface>,
  lastPage: number,
  page: number
  fetchCategories: ({page}: PaginationQueryInterface) => void
}

class CategoryList extends Component<CategoryListProps, CategoryListState> {
  onPageChange = (page: number): void => {
    this.props.fetchCategories({page})

    setTimeout(()=> {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200)
  }

  render() {
    return (
      <>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {this.props.data.map((category: any, index: number) => (
            <CategoryCard category={category} key={index}/>
          ))}
        </div>

        <div className="w-full mx-auto mt-10">
          <Paginator pages={this.props.lastPage} currentPage={this.props.page} onPageChange={this.onPageChange}/>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state.categories
}

export default connect(mapStateToProps, {fetchCategories})(CategoryList)
