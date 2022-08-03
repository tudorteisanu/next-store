import { FileRepository} from "../repository";

export class FileService {
  fileRepository: FileRepository;

  constructor() {
    this.fileRepository = new FileRepository()
  }

  async create(data: any): Promise<any> {
    return await this.fileRepository.create(data)
  }

  async delete(id: number): Promise<any> {
    return await this.fileRepository.delete({id})
  }
}
