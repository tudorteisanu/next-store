import {PhotoInterface} from "./photo";
import {GoodInterface} from "./goods";

export interface CreateCategoryInterface {
  id: undefined;
  name: string;
  photoId?: number;
  photo: PhotoInterface | undefined;
  good: Array<GoodInterface>
}

export interface CategoryInterface  extends Partial<CreateCategoryInterface>{

}
