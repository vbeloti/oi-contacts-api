import IData from '../../interfaces/IData';
import { IContactDocument } from '../../interfaces/IContact';

export default interface IContactRepository {
  findById(id: string): Promise<IContactDocument | null>;
  findByDocument(document: string): Promise<IContactDocument | null>;
  findAll(page: number, limit: number): Promise<IContactDocument[]>;
  create(data: IData): Promise<void>;
  delete(id: string): Promise<void>;
  countAll(): Promise<number>;
  findBySearch(
    type: string,
    document: string,
    state: string,
    city: string,
  ): Promise<IContactDocument | null>;
};
