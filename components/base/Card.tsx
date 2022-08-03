import React from "react";

interface IProps {
  children?: JSX.Element | any;
  footer?: JSX.Element;
  header?: JSX.Element;
}

export default class Card extends React.Component<IProps> {
  render() {
    return (
      <div className='min-h-fit'>
        {this.props.header}
        <div className="mt-8">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

            {this.props.children}

            <div className="mt-6">
              {this.props.footer}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
