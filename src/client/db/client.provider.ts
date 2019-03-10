import { Client } from './client.model';

export const clientProviders = [
    {
        provide: 'ClientRepository',
        useValue: Client,
    },
];
