import { GetAdvisorRepository } from '../../../data/providers/db/advisor/get-advisor-repository';

export class AdvisorSqlRepository implements GetAdvisorRepository {
  async get(data: any): Promise<any> {
    if (data) {
      return Promise.resolve([{ id: 1, name: 'abc' }]);
    }

    throw new Error('invalid data');
  }
}
