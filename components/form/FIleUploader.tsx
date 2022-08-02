import React, {Component, createRef} from "react";
import {ApiRoutes} from "../../ts/enum";
import http from "../../services/http";
import Image from 'next/image';

class FilePreview extends Component<any, any> {
  render() {
    if (this.props.file?.url) {
      return (
        <Image
          itemProp="image"
          loading="lazy"
          width={300}
          height={300}
          layout="fixed"
          className="object-cover overflow-hidden bg-gray-100"
          src={this.props.file?.url}
          alt={this.props.file?.name}
        />
      );
    }

    return (
      <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
        <svg
          className="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      </div>
    );
  }
}

export default class FileUploader extends Component<any, any> {
  textInput: any;

  constructor(props: any) {
    super(props);
    this.textInput = createRef();
    this.state = {file: null};
  }

  pickFile = (): void => {
    this.textInput.current.click();
  };

  onSelectFile = async (event: any) => {
    const [file] = event?.target?.files;
    await this.uploadFile({file});
  };

  uploadFile = async (data: any): Promise<void> => {
    const file: any = await http.post(ApiRoutes.Upload, data, {
      headers: {"Content-Type": "multipart/form-data"},
    });

    this.setState({file});
    this.props.onUpload(file.id);
  };

  get errorMessage(): JSX.Element {
    if (this.props.errorMessages && this.props.errorMessages.length) {
      return <div className="px-2 py-1 text-red-500 ml-2 text-sm leading-5">{this.props.errorMessages.join(', ')}</div>
    }
    return (<div></div>)
  }

  render() {
    return (
      <div>
        <div className="py-4">
          <div className="mt-1">
            <div className="flex items-center flex-col justify-center">
              <FilePreview file={this.state.file || this.props.file}/>
              <button
                onClick={this.pickFile}
                type="button"
                className="mt-2 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>upload photo</span>
              </button>
              <input
                className={"hidden"}
                onInput={(event) => this.onSelectFile(event)}
                type="file"
                ref={this.textInput}
              />
              {this.errorMessage}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
