import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/config';

async function run() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(
      config.environments.PORT,
      () => console.log(`App listening on ${config.environments.PORT}`)
    );
  } catch (error) {
    console.error(error);
  }
}

run();
