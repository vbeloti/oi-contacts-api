import DocumentValidatorFake from '../fakes/DocumentValidatorFake';
import ContactService from '../../services/ContactService';
import ContactRepositoryFake from '../fakes/ContactRepositoryFake';

describe('ContactService', () => {
  test('Should delete is call', async () => {
    const contactRepositoryFake = new ContactRepositoryFake();
    const sut = new ContactService(contactRepositoryFake);
    const deleted = await sut.delete('any_id');
    expect(deleted).toBeFalsy();
  });

  test('Should index is call', async () => {
    const contactRepositoryFake = new ContactRepositoryFake();
    const sut = new ContactService(contactRepositoryFake);
    const index = await sut.index(1, 1);
    expect(index).toEqual({
      data: [{}], limit: 1, pages: 0, total: 0,
    });
  });

  test('Should search is call', async () => {
    const contactRepositoryFake = new ContactRepositoryFake();
    const sut = new ContactService(contactRepositoryFake);

    const search = await sut.search(
      'cpf',
      '78619261096',
      'state',
      'city',
    );

    expect(search).toEqual({});
  });

  test('Should update is call', async () => {
    const contactRepositoryFake = new ContactRepositoryFake();
    const documentValidatorFake = new DocumentValidatorFake();
    const sut = new ContactService(contactRepositoryFake, documentValidatorFake);

    const update = await sut.update(
      'any_id',
      {
        document: '78619261096',
        state: 'state',
        city: 'city',
      },
    );

    expect(update).toEqual({});
  });

  test('Should store is call', async () => {
    const contactRepositoryFake = new ContactRepositoryFake();
    const documentValidatorFake = new DocumentValidatorFake();
    const sut = new ContactService(contactRepositoryFake, documentValidatorFake);
    const data = {
      name: 'name',
      type: 'cpf',
      document: '78619261096',
      state: 'state',
      city: 'city',
      birthday: new Date(),
      phone: 'phone',
    };

    const store = await sut.store(data);
    expect(store).toBeFalsy();
  });
});
