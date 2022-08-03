import {PhotoInterface} from "./photo";

export interface GoodInterface {
  id?: number;
  price: number;
  discount: number;
  name: string;
  description: string;
  photoId: number;
  categoryId: number;
  photo: PhotoInterface
}
