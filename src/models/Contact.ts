import mongoose from 'mongoose';
import { IContactDocument } from '../interfaces/IContact';

const ContactSchema = new mongoose.Schema({
  name: String,
  type: String,
  document: String,
  state: String,
  city: String,
  birthday: Date,
  phone: String,
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

export default mongoose.model<IContactDocument>('contacts', ContactSchema);
