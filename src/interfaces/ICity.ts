import { Document, Model } from 'mongoose';

interface ICities {
  city_name: string;
}

export interface ICity {
  uf_name: string,
  cities: ICities[]
}

export interface ICityDocument extends ICity, Document {}

export type ICityModel = Model<ICityDocument>;
