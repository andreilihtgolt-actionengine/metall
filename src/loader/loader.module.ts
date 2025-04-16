import { Module } from '@nestjs/common';
import { LoaderController } from './loader.controller';
import { LoaderService } from './loader.service';

@Module({
  controllers: [LoaderController],
  providers: [LoaderService]
})
export class LoaderModule {}
