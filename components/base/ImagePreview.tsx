import {Component} from "react";
import Image from "next/image";
import {PhotoInterface} from "../../ts/interfaces";

interface ImagePreviewProps {
  photo: PhotoInterface | undefined;
  static?: boolean
}

export default class ImagePreview extends Component<ImagePreviewProps> {
  get content(): JSX.Element {
    if (this.props.photo?.url) {
      if (!this.props.static) {
        return <div className="h-[300px] w-full">
          <img
            className="h-full w-full object-fit"
            src={this.props.photo.url}
            alt={"image"}/>
        </div>
      }

      return (<Image
        width={300}
        height={300}
        src={this.props.photo.url}
        alt={"image"}
      />)
    }
    return (<div></div>)
  }

  render() {
    return this.content;
  }
}
