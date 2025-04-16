import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoaderModule } from './loader/loader.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LoaderModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
