import { AdvisorByEmail } from '../../domain/usecases/get-advisor-by-email';

export class AdvisorController {
  private readonly advisorUseCase: AdvisorByEmail;

  async getAdvisorByEmail(email: string) {
    const response = await this.advisorUseCase.getAdvisorByEmail(email);

    return response;
  }
}
