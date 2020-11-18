import mongoose from 'mongoose';
import { ICityDocument } from '../interfaces/ICity';

const CitiesSchema = new mongoose.Schema({
  city_name: String,
});

const Citychema = new mongoose.Schema({
  uf_name: String,
  cities: [CitiesSchema],
});

export default mongoose.model<ICityDocument>('cities', Citychema);
