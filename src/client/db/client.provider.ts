import { Client } from './client.model';

// tslint:disable-next-line: typedef
export const clientProviders = [
    {
        provide: 'ClientRepository',
        useValue: Client,
    },
];
