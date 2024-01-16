export interface ClientByEmail {
  getClientByEmail(email: string): Promise<any>;
}
