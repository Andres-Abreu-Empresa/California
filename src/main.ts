import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import * as dotenv from 'dotenv'

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService); // Obtener el ConfigService para acceder a las variables de entorno
  const port = configService.get<number>('APP_PORT', 3000) // Usar la variable APP_PORT del .env, o 3000 por defecto

  await app.listen(port)
  console.log(`Application is running on: http://localhost:${port}`)
}
bootstrap()
