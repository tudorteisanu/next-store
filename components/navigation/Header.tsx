import React, {Fragment} from "react";
import NavLink from 'next/link';
import {PageRoutes} from "../../ts/enum";
import {withRouter} from "next/router";
import AdditionalLinks from "./AdditionalLinks";

class Header extends React.Component<any, any> {
  protected readonly links = [
    {to: PageRoutes.Home, name: "Home"},
    {to: PageRoutes.Goods, name: "Goods"},
    {to: PageRoutes.Categories, name: "Categories"},
    {to: PageRoutes.Users, name: "Users"},
  ];

  protected readonly additionalLinks = [
    {to: PageRoutes.Login, name: "Login"},
    {to: PageRoutes.Register, name: "Register"},
  ]

  linkClass(link: string): string {
    let isActive;

    if (link === '/') {
      isActive = this.props.router.asPath === link;
    } else {
      isActive = this.props.router.asPath.startsWith(link);
    }

    if (isActive) {
      return "font-normal underline font-bold mx-2 cursor-pointer";
    }

    return "font-normal text-white mx-2 cursor-pointer";
  }

  render() {
    return (
      <div className="w-full p-5 bg-blue-800 text-white flex items-center justify-between">
        <div>
          {this.links.map((link, i) => (
            <NavLink href={link.to} key={i}>
            <span className={this.linkClass(link.to)}>
            {link.name}
            </span>
            </NavLink>
          ))}
        </div>
        <div>
          <AdditionalLinks />
        </div>
      </div>
    );
  }
}

export default withRouter(Header)
