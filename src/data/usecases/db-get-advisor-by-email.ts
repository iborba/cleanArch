import { AdvisorByEmail } from '../../domain/usecases/get-advisor-by-email';
import { AdvisorSqlRepository } from '../../infra/db/sqlserver/advisor-sql-repository';
import { GetAdvisorRepository } from '../providers/db/advisor/get-advisor-repository';

export class DbGetAdvisorByEmail implements AdvisorByEmail {
  //DI or singleton solves this
  private getAdvisorRepository: GetAdvisorRepository = new AdvisorSqlRepository()

  async getAdvisorByEmail(email: string): Promise<any> {
    const advisor = await this.getAdvisorRepository.get(email);

    return advisor;
  }
}
