import { Component } from "react";
import GoodCard from "./GoodCard";
import Paginator from "../../layout/Paginator";
import {connect} from "react-redux";
import {fetchGoods} from "../../../store/actions";
import {PaginationQueryInterface} from "../../../ts/interfaces/pagination";
import {GoodInterface} from "../../../ts/interfaces";

interface IState {
}

interface IProps {
  goods: Array<any>;
  fetchGoods: (params?: PaginationQueryInterface) => void,
  data: Array<GoodInterface>,
  lastPage: number,
  page: number
}

class GoodList extends Component<any, IState> {
  onPageChange = (page: number): void => {
    this.props.fetchGoods({page})
  }

  render() {
    return (
      <>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {this.props.data.map((good: any, index: number) => (
            <GoodCard good={good} key={index}/>
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
  return state.goods
}

export default connect(mapStateToProps, {fetchGoods})(GoodList);
