import {Component} from "react";
import Card from "../../base/Card";
import CardHeading from "../../base/CardHeading";
import Form from "./Form";

export default class EditGoods extends Component<any, any> {
  get title() {
    return "Update Good";
  }

  render() {
    return (
      <Card>
        <CardHeading title={this.title}/>
        <Form goodId={this.props.goodId}/>
      </Card>
    );
  }
}
