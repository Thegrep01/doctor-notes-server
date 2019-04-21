import { Client, Note } from './client.model';

// tslint:disable-next-line: typedef
export const clientProviders = [
    {
        provide: 'ClientRepository',
        useValue: Client,
    },
    {
        provide: 'NoteRepository',
        useValue: Note,
    },
];
