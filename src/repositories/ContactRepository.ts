import IData from '../interfaces/IData';
import Contact from '../models/Contact';
import { IContactDocument, IContactModel } from '../interfaces/IContact';
import IContactRepository from './interfaces/IContactRepository';

class ContactRepository implements IContactRepository {
  private mongoRepository: IContactModel;

  constructor() {
    this.mongoRepository = Contact;
  }

  public async findBySearch(
    type: string,
    document: string,
    state: string,
    city: string,
  ): Promise<IContactDocument | null> {
    const person = this.mongoRepository.findOne({
      type,
      document,
      state: state.toUpperCase(),
      city,
    });

    return person;
  }

  public async findById(id: string): Promise<IContactDocument | null> {
    const person = this.mongoRepository.findById(id);
    return person;
  }

  public async findByDocument(document: string): Promise<IContactDocument | null> {
    const person = this.mongoRepository.findOne({ document });
    return person;
  }

  public async countAll(): Promise<number> {
    const count = this.mongoRepository.countDocuments({});
    return count;
  }

  public async findAll(page: number, limit: number): Promise<IContactDocument[]> {
    const persons = this.mongoRepository.find().skip(limit * (page - 1)).limit(limit);
    return persons;
  }

  public async create(data: IData): Promise<void> {
    await this.mongoRepository.create(data);
  }

  public async delete(id: string): Promise<void> {
    await this.mongoRepository.deleteOne({ _id: id });
  }
}

export default ContactRepository;
