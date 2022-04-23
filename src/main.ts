import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {HttpExceptionFilter} from './infrastructure/exception/http-exception.filter'
import {ValidationPipe} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(process.env.PORT)
}

bootstrap()
