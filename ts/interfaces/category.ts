import {PhotoInterface} from "./photo";

export interface CategoryInterface {
  id?: number | undefined;
  name: string;
  photoId?: number | null;
  photo?: PhotoInterface | null
}
