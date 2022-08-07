import { FileRepository} from "../repository";

export class FileService {
  async create(data: any): Promise<any> {
    return await FileRepository.create(data)
  }

  async delete(id: number): Promise<any> {
    return await FileRepository.delete({id})
  }
}
