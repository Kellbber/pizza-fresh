import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
//Swagger
const config = new DocumentBuilder()
.setTitle('MegaDriver')
.setDescription('Aplicação para gestão das salas de uma locadora')
.setVersion('1.0.0')
.addTag('status')
.addTag('table')
.addTag('product')
.addTag('user')
.addTag('order')
.build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);


  await app.listen(3333);
}
bootstrap();
