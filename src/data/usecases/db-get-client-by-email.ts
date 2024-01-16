import { ClientByEmail } from '../../domain/usecases/get-client-by-email';
import { ClientSqlRepository } from '../../infra/db/sqlserver/client-sql-repository';
import { GetClientRepository } from '../providers/db/client/get-client-repository';

export class DbGetClientByEmail implements ClientByEmail {
  //DI or singleton solves this
  private getClientRepository: GetClientRepository = new ClientSqlRepository()

  async getClientByEmail(email: string): Promise<any> {
    const client = await this.getClientRepository.get(email);

    return client;
  }
}
