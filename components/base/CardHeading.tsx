import React, {Component} from "react";
import NavLink from 'next/link';
import { PageRoutes } from "../../ts/enum";

interface IProps {
  title?: string;
  subTitle?: string;
}

export default class CardHeading extends React.Component<IProps, any> {
  render() {
    return (
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-xl pb-5 font-extrabold text-gray-900">
          {this.props.title}
        </h2>
          <SubTitle subTitle={this.props.subTitle}/>
      </div>
    );
  }
}

interface SubTitleProps {
  subTitle: string | undefined;
}

class SubTitle extends Component<SubTitleProps> {
    render() {
      if (this.props.subTitle) {
        return (<p className="mt-2 text-center text-sm text-gray-600">
          <NavLink
            href={PageRoutes.Register}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {this.props.subTitle}
          </NavLink>
        </p>)
      }

      return (<></>);
    }
}
