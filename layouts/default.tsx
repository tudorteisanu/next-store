import React from "react";
import Header from "../components/navigation/Header";
import { UserInterface } from "../ts/interfaces";
import {NextPageContext} from "next";
import cookies from "next-cookies";
import {store} from "../store";
import {setToken} from "../store/actions/auth";
import Loading from "../components/base/Loading";

interface IProps {
  children?: any;
}
interface IState {
  user: UserInterface;
    userAgent: any;
}

class Default extends React.Component<IProps, IState> {
    static async getInitialProps(ctx: NextPageContext) {
        const {token} = cookies(ctx)
        await store.dispatch(setToken(token))
        return { token }
    }

  render() {
    return (
      <div className="w-full  min-h-screen bg-gray-700">
        <Header />
        <div>{this.props.children}</div>
        <Loading />
      </div>
    );
  }
}

export default Default;
