import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import DocumentValidator from '../adapter/DocumentValidator';
import AppError from '../errors/AppError';
import ContactRepository from '../repositories/ContactRepository';
import ContactService from '../services/ContactService';

class ContactController {
  async index(req: Request, res: Response) {
    const {
      page = 1, limit = 5, type, document, state, city,
    } = req.query;

    const contactRepository = new ContactRepository();
    const contactService = new ContactService(contactRepository);

    if (type && document && state && city) {
      const contact = await contactService.search(
        String(type),
        String(document),
        String(state),
        String(city),
      );

      if (!contact) throw new AppError('This search has no data');
      return res.json(contact);
    }

    const contacts = await contactService.index(Number(page), Number(limit));
    if (!contacts.data.length) throw new AppError('There are no contacts registered.');

    return res.json(contacts);
  }

  async store(req: Request, res: Response) {
    const {
      name,
      type,
      document,
      state,
      city,
      birthday,
      phone,
    } = req.body;

    if (!name) throw new AppError('Name is required');
    if (!type) throw new AppError('Type is required');
    if (!document) throw new AppError('Document is required');
    if (!state) throw new AppError('State is required');
    if (!city) throw new AppError('City is required');
    if (!birthday) throw new AppError('Birthday is required');
    if (!phone) throw new AppError('Phone is required');

    const contactRepository = new ContactRepository();
    const documentValidator = new DocumentValidator();
    const contactService = new ContactService(contactRepository, documentValidator);
    const contact = await contactService.store({
      name,
      type,
      document,
      state,
      city,
      birthday,
      phone,
    });

    return res.json(contact);
  }

  async update(req: Request, res: Response) {
    const {
      name,
      type,
      document,
      state,
      city,
      phone,
    } = req.body;

    const { id } = req.params;

    const contactRepository = new ContactRepository();
    const documentValidator = new DocumentValidator();
    const contactService = new ContactService(contactRepository, documentValidator);
    const contact = await contactService.update(id, {
      name,
      type,
      document,
      state,
      city,
      phone,
    });

    return res.json(contact);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const contactRepository = new ContactRepository();
    const contactService = new ContactService(contactRepository);
    const contact = await contactService.delete(id);

    return res.json(contact);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const verifyId = isValidObjectId(id);
    if (!verifyId) {
      throw new AppError('There are no contact registered.');
    }
    const contactRepository = new ContactRepository();
    const contactService = new ContactService(contactRepository);
    const contact = await contactService.show(id);

    return res.json(contact);
  }
}

export default ContactController;
