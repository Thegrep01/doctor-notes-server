import { Doctor } from './doctor.model';

export const doctorProviders = [
    {
        provide: 'DoctorRepository',
        useValue: Doctor,
    },
];