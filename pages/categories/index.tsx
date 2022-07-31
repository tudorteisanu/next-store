import React from "react";
import Default from "../../layouts/default";
import NavLink from "next/link";
import {PageRoutes} from "../../ts/enum";
import CategoryList from "../../components/categories/CategoryList";
import {fetchCategories} from '../../store/actions/categories';
import {connect} from "react-redux";

class Categories extends React.Component<any, any> {
  async componentDidMount() {
    await this.props.fetchCategories()
  }

  render() {
    return (
      <Default>
        <div className="sm:max-w-5xl p-10 mx-auto">
          <NavLink href={PageRoutes.CategoriesCreate}>
            <button className="bg-blue-700 text-gray-100 py-2 px-5 rounded-md mb-3">Add category</button>
          </NavLink>
          <CategoryList categories={this.props.categories} />
        </div>
      </Default>
    );
  }
}


const mapStateToProps = (state: any) => {
  return {
    categories: state.categories.items,
  };
};

export default connect(mapStateToProps, {fetchCategories})(Categories)
