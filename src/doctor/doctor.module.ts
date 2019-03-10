import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/dataBase.module';
import { doctorProviders } from './db/docto.provider';

@Module({
    imports: [DatabaseModule],
    controllers: [DoctorController],
    providers: [
        DoctorService,
        ...doctorProviders,
    ],
})
export class DoctorModule { }
