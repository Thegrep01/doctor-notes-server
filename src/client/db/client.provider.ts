import { Client, Note, Problems } from './client.model';

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
    {
        provide: 'ProblemsRepository',
        useValue: Problems,
    },
];
