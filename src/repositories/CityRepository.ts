import City from '../models/City';
import { ICityDocument, ICityModel } from '../interfaces/ICity';
import ICityRepository from './interfaces/ICityRepository';

class CityRepository implements ICityRepository {
  private mongoRepository: ICityModel;

  constructor() {
    this.mongoRepository = City;
  }

  public async findAll(): Promise<ICityDocument[]> {
    const ufs = this.mongoRepository.find({}, 'uf_name').sort({ uf_name: 1 });
    return ufs;
  }

  public async findByCity(uf: string): Promise<ICityDocument | null> {
    const person = this.mongoRepository.findOne({ uf_name: uf.toUpperCase() }, 'cities');
    return person;
  }
}

export default CityRepository;
