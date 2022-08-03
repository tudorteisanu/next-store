export interface UserInterface {
  id?: string;
  name?: string;
  email?: string;
  createdAt: Date;
  updatedAt: Date;
}
export type {CategoryInterface, CreateCategoryInterface} from './category'
export type {PhotoInterface} from './photo'
export type {GoodInterface} from './goods'
export type {LoginInterface, RegisterInterface} from './auth'
