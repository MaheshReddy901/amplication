import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildContextStorageModule } from './buildContextStorage/buildContextStorage.module';
import { CodeBuildModule } from './codeBuild/codeBuild.module';
import { RootWinstonModule } from './logger/root-winston.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CodeBuildModule,
    BuildContextStorageModule,
    QueueModule,
    RootWinstonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}