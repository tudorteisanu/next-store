import React from "react";

export default class Button extends React.Component<any, any> {
  render() {
    return (
      <button
        type="submit"
        onClick={this.props.onClick}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
                    font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-indigo-500"
      >
        {this.props.children}
      </button>
    );
  }
}
