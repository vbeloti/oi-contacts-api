import CityService from '../../services/CityService';
import CityRepositoryFake from '../fakes/CityRepositoryFake';

describe('CityService', () => {
  test('Should ufs is returned on success', async () => {
    const cityRepositoryFake = new CityRepositoryFake();
    const sut = new CityService(cityRepositoryFake);
    const ufs = await sut.index();
    expect(ufs).toEqual([{}]);
  });
  test('Should cities is returned on success', async () => {
    const cityRepositoryFake = new CityRepositoryFake();
    const sut = new CityService(cityRepositoryFake);
    const cities = await sut.show('any_id');
    expect(cities).toEqual({});
  });
});
