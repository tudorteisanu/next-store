import React from "react";

interface IProps {
  children?: any;
  footer?: any;
  header?: any;
}

export default class Card extends React.Component<IProps, any> {
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
