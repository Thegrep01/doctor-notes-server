import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/dataBase.module';
import { doctorProviders } from './db/doctor.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [DoctorController],
    providers: [
        DoctorService,
        ...doctorProviders,
    ],
})
export class DoctorModule { }
