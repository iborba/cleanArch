import { GetClientRepository } from '../../../data/providers/db/client/get-client-repository';

export class ClientSqlRepository implements GetClientRepository {
  async get(data: any): Promise<any> {
    if (data) {
      return Promise.resolve([{ id: 1, name: 'abc' }]);
    }

    throw new Error('invalid data');
  }
}
