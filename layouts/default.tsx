import React from "react";
import Header from "../components/navigation/Header";
import {UserInterface} from "../ts/interfaces";
import Loading from "../components/base/Loading";
import PageHead from "../components/layout/PageHead";
import {connect} from "react-redux";

interface IProps {
  children?: any;
  loading: boolean;
}

interface IState {
  user: UserInterface;
  loading: boolean;
}

class Default extends React.Component<IProps, IState> {

  get content(): JSX.Element {
    if (this.props.loading) {
      return <Loading/>
    }

    return (<div>{this.props.children}</div>)
  }

  render() {
    return (
      <><PageHead/>
        <div className="w-full  min-h-screen bg-gray-700">
          <Header/>
          {this.content}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Default)
