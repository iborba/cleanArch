import { ClientController } from './_external/controllers/client-controller';

async function main() {
  try {
    console.log('start');
    const controller = new ClientController();
    const response = await controller.getClientByEmail('email');
    
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

main().then()