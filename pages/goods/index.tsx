import React from "react";
import {connect} from "react-redux";
import {fetchGoods} from "../../store/actions/goods";
import GoodList from "../../components/goods/GoodList";
import Default from "../../layouts/default";
import NavLink from "next/link";
import {PageRoutes} from "../../ts/enum";

interface IState {
  goods: Array<any>;
}

class Index extends React.Component<any, IState> {
  async componentDidMount() {
    await this.props.fetchGoods();
  }

  render() {
    return (
      <Default>
          <div className="sm:max-w-5xl p-10 mx-auto">
              <div className="m-10">
                <NavLink href={PageRoutes.GoodsCreate}>
                  <button className="bg-blue-700 text-gray-100 py-2 px-5 rounded-md mb-3">Add goods</button>
                </NavLink>
                <GoodList goods={this.props.goods}/>
              </div>
          </div>
      </Default>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    goods: state.goods.items,
    loading: state.goods.loading,
  };
};

export default connect(mapStateToProps, {fetchGoods})(Index);
