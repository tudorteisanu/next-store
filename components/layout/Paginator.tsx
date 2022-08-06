import {Component} from "react";

interface PaginatorPropsInterface {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => void
}

export default class Paginator extends Component<PaginatorPropsInterface> {
  itemClass = (page: number): string => {
    if (this.props.currentPage === page) {
      return 'h-6 px-2 rounded-full mx-1 cursor-pointer bg-red-500 text-white hover:bg-red-300'
    }
    return 'h-6 px-2 rounded-full mx-1 cursor-pointer bg-white text-gray-700  hover:bg-red-200 border border-gray-200'
  }

  pageItem(page: number, index: number): JSX.Element {
    return (<div
      className={this.itemClass(page)}
      onClick={() => this.props.onPageChange(page)}
      key={index}>
      {page}
    </div>)
  }

  get totalPages(): Array<number> {
    return [...new Array(this.props.pages)].map((_,index) => index + 1)
  }

  get pagesToDisplay(): Array<number>{
    return this.totalPages
  }

  get component(): JSX.Element {
    if (this.props.pages > 1) {
      return (<div className="flex items-center justify-center">
        {this.pagesToDisplay.map((page: number, index)=> this.pageItem(page, index))}
      </div>)
    }
    return <></>
  }

  render() {
    if (!this.props.pages) {
      return;
    }

    return this.component;
  }
}
