import {Component, memo} from "react";
import {PageRoutes} from "../../../ts/enum";
import Card from "../../base/Card";
import CardHeading from "../../base/CardHeading";
import Button from "../../form/Button";
import NavLink from 'next/link';
import Form from "./Form";

class EditCategory extends Component<any, any> {
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
    const {submitted} = this.state;

    if (!submitted) {
      return (<Form categoryId={this.props.categoryId} toggle={() => this.toggle()}/>)
    }
    return (<div>
      <Button onClick={()=> this.toggle()}> Add category</Button>

      <NavLink href={PageRoutes.Home}>
        <button className="w-full p-1 mt-2 rounded-md border border-gray-400 text-gray-500">
          To home
        </button>
      </NavLink>
    </div>)
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

export default memo(EditCategory)
