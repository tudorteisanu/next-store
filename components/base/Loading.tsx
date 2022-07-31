import React, { Component } from "react";
import {connect} from "react-redux";

interface IProps {
  loading: boolean,
}

class Loading extends Component<IProps, any> {
  get loadingClass(): string {
    if (this.props.loading) {
      return  'fixed bg-gray-900/50 flex items-center justify-center w-full h-full top-0 left-0';
    }
    return 'hidden'
  }
  render() {
    return (
      <div className={this.loadingClass}>
        <div className={"flex items-center justify-center flex-col"}>
          <div className="inline-block animate-spin rounded-full p-2 bg-teal-400 text-white text-sm">
            <svg
              className="w-6 h-6 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <div className="text-white mt-2 ">Loading
            <span className="animate-ping">.</span>
            <span className="animate-ping animation-delay-500">.</span>
            <span className="animate-ping animation-delay-800">.</span>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
  };
};

export default  connect(mapStateToProps)(Loading)
