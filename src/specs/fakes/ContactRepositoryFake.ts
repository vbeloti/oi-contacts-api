/* eslint-disable no-underscore-dangle */
import { IContactDocument } from '../../interfaces/IContact';
import IData from '../../interfaces/IData';
import IContactRepository from '../../repositories/interfaces/IContactRepository';

class ContactRepositoryFake implements IContactRepository {
    private contact: IContactDocument = {} as IContactDocument;

    private saveContact: IContactDocument[] = [];

    private count = 0;

    public async findBySearch(
      type: string,
      document: string,
      state: string,
      city: string,
    ): Promise<IContactDocument | null> {
      return this.contact;
    }

    public async findById(id: string): Promise<IContactDocument | null> {
      return this.contact;
    }

    public async findByDocument(document: string): Promise<IContactDocument | null> {
      return null;
    }

    public async countAll(): Promise<number> {
      return this.count;
    }

    public async findAll(page: number, limit: number): Promise<IContactDocument[]> {
      return [this.contact];
    }

    public async create(data: IData): Promise<void> {
      this.saveContact.push(data as IContactDocument);
    }

    public async delete(id: string): Promise<void> {
      this.saveContact.filter((idFilter) => idFilter._id !== id);
    }
}

export default ContactRepositoryFake;
