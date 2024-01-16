import { AdvisorByEmail } from '../../domain/usecases/get-advisor-by-email';
import { GetAdvisorRepository } from '../providers/db/advisor/get-advisor-repository';

export class DbGetAdvisorByEmail implements AdvisorByEmail {
  private readonly getAdvisorRepository: GetAdvisorRepository;

  async getAdvisorByEmail(email: string): Promise<any> {
    const advisor = await this.getAdvisorRepository.get(email);

    return advisor;
  }
}
