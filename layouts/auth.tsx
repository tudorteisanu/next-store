import React from "react";
import Loading from "../components/base/Loading";

interface IProps {
  children: any;
}
interface IState {}


export default class Auth extends React.Component<IProps, IState> {
  render() {
    return (
      <>
        <div className="w-full  min-h-screen bg-gray-200">
          <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md w-full">
              {this.props.children}
            </div>
          </div>
        </div>
        <Loading/>
      </>
  );
  }
}
