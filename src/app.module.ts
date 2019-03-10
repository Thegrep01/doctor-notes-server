import { DoctorModule } from './doctor/doctor.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './common/dataBase.module';
import { ClientModule } from './client/client.module';


@Module({
  imports: [DatabaseModule, DoctorModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
