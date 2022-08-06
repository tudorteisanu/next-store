import React, {Component} from "react";
import {connect} from "react-redux";
import {logout} from "../../store/actions";

class AdditionalLinks extends Component<any, any> {
  get additionalItems(): JSX.Element {
      return <div>
        <span className="cursor-pointer" onClick={() => this.props.logout()}>Logout</span>
      </div>
  }

  render() {
    return <div className="flex">
      <div className="ml-2">
        {this.additionalItems}
      </div>
    </div>
  }
}


const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.auth.loggedIn || false,
    user: state.auth.credentials?.user || {}
  }
}

export default connect(mapStateToProps, {logout})(AdditionalLinks)
