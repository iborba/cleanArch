import { DbGetAdvisorByEmail } from '../../data/usecases/db-get-advisor-by-email';
import { AdvisorByEmail } from '../../domain/usecases/get-advisor-by-email';

export class AdvisorController {
  //DI must solve this
  private advisorUseCase: AdvisorByEmail = new DbGetAdvisorByEmail()

  async getAdvisorByEmail(email: string) {
    const response = await this.advisorUseCase.getAdvisorByEmail(email);

    return response;
  }
}
