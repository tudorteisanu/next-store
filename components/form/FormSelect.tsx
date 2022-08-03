import React from "react";

interface FormSelectProps {
  type?: string;
  label?: string;
  onInput?: any;
  onChange?: any;
  value?: any;
  items: Array<any>;
  errorMessages?: string[]
}

export default class FormSelect extends React.Component<FormSelectProps> {
  get errorMessage(): JSX.Element {
    if (this.props.errorMessages && this.props.errorMessages.length) {
      return <div className="px-2 py-1 text-red-500 ml-2 text-sm leading-5">{this.props.errorMessages.join(', ')}</div>
    }
    return (<div></div>)
  }

  render() {
    return (
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {this.props.label}
        </label>
        <div className="mt-1">
          <select
            value={this.props.value}
            onInput={this.props.onInput}
            onChange={this.props.onChange}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                       placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                       sm:text-sm">

            {
              this.props.items.map((item: any, index: number) => <option value={item.value}
                                                                         key={index}>{item.text}</option>)
            }

          </select>
          {this.errorMessage}
        </div>
      </div>
    );
  }
}
