import React from "react";
import Header from "../components/navigation/Header";
import {UserInterface} from "../ts/interfaces";
import Loading from "../components/base/Loading";
import PageHead from "../components/layout/PageHead";
import {withRouter} from "next/router";
import {WithRouterProps} from "next/dist/client/with-router";
import {store} from "../store";

interface IProps {
  children?: any;
}

interface IState {
  user?: UserInterface;
  loading: boolean;
}

class Default extends React.Component<IProps & WithRouterProps, IState> {
  state: IState = {
    loading: false
  }
  componentDidMount() {
    const state = store.getState()
    this.props.router.events.on('routeChangeStart', (url: string) => {
      this.setState({loading: true})
    })
    this.props.router.events.on('routeChangeComplete', (url: string) => {
        this.setState({loading: false})
    })
    this.props.router.events.on('routeChangeError', (url: string) => {
        this.setState({loading: false})
    })
  }

  get content(): JSX.Element {
    if (this.state.loading) {
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

export default withRouter(Default);
