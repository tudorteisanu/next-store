import {Component} from "react";
import Image from "next/image";
import {PhotoInterface} from "../../ts/interfaces";

interface ImagePreviewProps {
  photo: PhotoInterface | undefined;
}

export default class ImagePreview extends Component<ImagePreviewProps> {
  get content(): JSX.Element {
    if (this.props.photo?.url) {
      return (<Image
        width={300}
        itemProp="image"
        height={300}
        src={this.props.photo.url}
        alt={"image"}
      />)
    }
    return (<div></div>)
  }

  render() {
    return <div>
      {this.content}
    </div>;
  }
}
