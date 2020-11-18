import { ICityDocument } from '../../interfaces/ICity';

export default interface ICityRepository {
  findAll(): Promise<ICityDocument[]>;
  findByCity(uf: string, city?: string): Promise<ICityDocument | null>;
};
