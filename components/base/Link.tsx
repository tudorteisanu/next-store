import {Component} from "react";

export default class Link extends Component<any> {
  render() {
    return (
      <Link href={this.props.href}>
        {this.props.children}
      </Link>
    );
  }
}
