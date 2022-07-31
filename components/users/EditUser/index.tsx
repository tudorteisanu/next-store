import {Component} from "react";
import Card from "../../base/Card";
import CardHeading from "../../base/CardHeading";
import Form from "./Form";

class EditUser extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      submitted: false,
    }
  }

  toggle = (): void => {
    this.setState({submitted: !this.state.submitted});
  };

  get title() {
    if (this.state.submitted) {
      return "Successful edited category";
    }
    return "Edit category";
  }

  get content(): JSX.Element {
      return (<Form userId={this.props.userId} toggle={() => this.toggle()}/>)
  }

  render() {
    return (
      <Card>
        <CardHeading title={this.title}/>
        {this.content}
      </Card>
    );
  }
}

export default EditUser;
