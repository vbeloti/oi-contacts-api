import { ICityDocument } from '../../interfaces/ICity';
import ICityRepository from '../../repositories/interfaces/ICityRepository';

class CityRepositoryFake implements ICityRepository {
  private cities: ICityDocument = {} as ICityDocument;

  public async findAll(): Promise<ICityDocument[]> {
    return [this.cities];
  }

  public async findByCity(uf: string): Promise<ICityDocument | null> {
    return this.cities;
  }
}

export default CityRepositoryFake;
