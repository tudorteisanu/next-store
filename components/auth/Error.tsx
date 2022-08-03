import React from "react";
import Card from "../base/Card";
import CardHeading from "../base/CardHeading";
import NavLink from 'next/link';
import {PageRoutes} from "../../ts/enum";

interface PropsInterface {
  title?: string;
  text?: string;
}

export default class ForgotPasswordForm extends React.Component<PropsInterface> {
  render() {
    return (
      <Card header={<CardHeading title={this.props.title}/>}>
        <div className="text-gray-600 text-center">{this.props.text}</div>
        <div className="shadow-md bg-blue-700 text-white p-3 text-center mt-2 rounded hover:opacity-90 cursor-pointer">
          <NavLink href={PageRoutes.Home}>to home</NavLink>
        </div>
      </Card>
    );
  }
}
