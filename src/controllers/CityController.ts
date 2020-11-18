import { Request, Response } from 'express';
import CityRepository from '../repositories/CityRepository';
import CityService from '../services/CityService';

class CityController {
  async index(req: Request, res: Response) {
    const cityRepository = new CityRepository();
    const cityService = new CityService(cityRepository);
    const ufs = await cityService.index();

    return res.json(ufs);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const cityRepository = new CityRepository();
    const cityService = new CityService(cityRepository);
    const cities = await cityService.show(id);

    return res.json(cities);
  }
}

export default CityController;
