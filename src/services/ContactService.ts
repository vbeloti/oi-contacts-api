import IDocumentValidator from '../interfaces/IDocumentValidator';
import AppError from '../errors/AppError';
import IData from '../interfaces/IData';
import { IContactDocument } from '../interfaces/IContact';
import IMobileRepository from '../repositories/interfaces/IContactRepository';
import IUpdate from '../interfaces/IUpdate';

class ContactService {
  constructor(
    private mobileRepository: IMobileRepository,
    private documentValidator?: IDocumentValidator,
  ) { }

  public async search(
    type: string,
    document: string,
    state: string,
    city: string,
  ): Promise<IContactDocument | null> {
    const contact = await this.mobileRepository.findBySearch(type, document, state, city);
    return contact;
  }

  public async index(page: number, limit: number):
  Promise<{data: IContactDocument[], pages: number, total:number, limit: number}> {
    const contacts = await this.mobileRepository.findAll(page, limit);

    const count = await this.mobileRepository.countAll();
    return {
      data: contacts, pages: Math.ceil(count / limit), total: count, limit,
    };
  }

  public async store(data: IData) {
    const documentIsValid = this.documentValidator?.validate(data.document);
    if (!documentIsValid) throw new AppError('Document not valid');

    const documentExists = await this.mobileRepository.findByDocument(data.document);
    if (documentExists) {
      throw new AppError('This document cannot be registered');
    }

    const contact = await this.mobileRepository.create(data);
    return contact;
  }

  public async update(id: string, data: IUpdate) {
    const contact = await this.mobileRepository.findById(id);
    if (!contact) throw new AppError('Does not exists contact');

    if (data.document && data.document !== contact.document) {
      const documentExists = await this.mobileRepository.findByDocument(data.document);
      if (documentExists) {
        throw new AppError('This document cannot be registered');
      } else {
        const documentIsValid = this.documentValidator?.validate(data.document);
        if (!documentIsValid) throw new AppError('Document not valid');

        contact.document = data.document;
      }
    }

    if (data.name && data.name !== contact.name) contact.name = data.name;
    if (data.type && data.type !== contact.type) contact.type = data.type;
    if (data.state && data.state !== contact.state) contact.state = data.state;
    if (data.city && data.city !== contact.city) contact.city = data.city;
    if (data.phone && data.phone !== contact.phone) contact.phone = data.phone;

    await contact.save();
  }

  public async delete(id: string) {
    const contactExists = await this.mobileRepository.findById(id);
    if (!contactExists) throw new AppError('Does not exists contact');

    const contact = await this.mobileRepository.delete(id);
    return contact;
  }

  public async show(id: string) {
    const contactExists = await this.mobileRepository.findById(id);
    if (!contactExists) throw new AppError('Does not exists contact');

    const contact = await this.mobileRepository.findById(id);
    return contact;
  }
}

export default ContactService;
