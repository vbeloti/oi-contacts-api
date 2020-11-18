import { Document, Model } from 'mongoose';

export interface IContact {
  name: string,
  type: string,
  document: string,
  state: string,
  city: string,
  birthday: Date,
  phone: string,
}

export interface IContactDocument extends IContact, Document {}

export type IContactModel = Model<IContactDocument>
