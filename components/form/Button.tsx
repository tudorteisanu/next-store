import React from "react";

interface ButtonProps {
  children: JSX.Element | string,
  onClick?: (event?: InputEvent) => InputEvent | any
}

export default class Button extends React.Component<ButtonProps> {
  handleClick = (event: any): void => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }
  }

  render() {
    return (
      <button
        type="submit"
        onClick={this.handleClick}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm
                    font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-indigo-500"
      >
        {this.props.children}
      </button>
    );
  }
}
