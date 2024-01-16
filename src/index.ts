import { AdvisorController } from './_external/controllers/advisor-controller';

async function main() {
  try {
    console.log('start');
    const controller = new AdvisorController();
    const response = await controller.getAdvisorByEmail('email');
    
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

main().then()