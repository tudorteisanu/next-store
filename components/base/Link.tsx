import {Component} from "react";

interface LinkProps {
  href: string;
  children: JSX.Element
}

export default class Link extends Component<LinkProps> {
  render() {
    return (
      <Link href={this.props.href}>
        {this.props.children}
      </Link>
    );
  }
}
