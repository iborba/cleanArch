import { DbGetClientByEmail } from '../../data/usecases/db-get-client-by-email';
import { ClientByEmail } from '../../domain/usecases/get-client-by-email';

export class ClientController {
  //DI or singleton solves this
  private clientUseCase: ClientByEmail = new DbGetClientByEmail()

  async getClientByEmail(email: string) {
    const response = await this.clientUseCase.getClientByEmail(email);

    return response;
  }
}
