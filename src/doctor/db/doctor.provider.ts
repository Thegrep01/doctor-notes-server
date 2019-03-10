import { Doctor } from './doctor.model';

// tslint:disable-next-line: no-any
export const doctorProviders: any = [
    {
        provide: 'DoctorRepository',
        useValue: Doctor,
    },
];