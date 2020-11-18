import ICityRepository from '../repositories/interfaces/ICityRepository';

class CityService {
  constructor(private cityRepository: ICityRepository) { }

  public async index() {
    const ufs = await this.cityRepository.findAll();
    return ufs;
  }

  public async show(id: string) {
    const cities = await this.cityRepository.findByCity(id);

    return cities;
  }
}

export default CityService;
