import { ClientDto, NotesDto } from './db/client.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Client, Note, Problems } from './db/client.model';

@Injectable()
export class ClientService {
    public constructor(
        @Inject('ClientRepository')
        private readonly clientRepository: typeof Client,
        @Inject('NoteRepository') private readonly notesRepository: typeof Note,
        @Inject('ProblemsRepository') private readonly probRepository: typeof Problems
    ) {}

    // tslint:disable-next-line:no-any
    public async getByStatus(docId: number, status: number): Promise<any[]> {
        return await this.clientRepository.findAll<Client>({
            where: {
                DoctorID: +docId,
                status: +status,
            },
        });
    }

    public async getNote(id: number): Promise<Note | null> {
        return await this.notesRepository.findOne({ where: { id: +id } });
    }
    // tslint:disable:no-any
    public async getClientById(id: number): Promise<any> {
        let problems: any = await this.probRepository.findAll({ where: { clientId: +id } });
        const client: Client[] = await this.clientRepository.findAll<Client>({ where: { id: +id } });
        problems = problems.map((i: any) => {
            return { name: i.name, date: i.date };
        });
        const newClient: any = client[0].dataValues;
        newClient.problems = problems;

        return newClient;
    }

    public async getNotesList(id: number): Promise<NotesDto[]> {
        return await this.notesRepository.findAll<Note>({
            where: {
                CLientID: +id,
            },
            attributes: ['id', 'title', 'date'],
        });
    }

    public async updateClient(query: Partial<ClientDto>): Promise<void> {
        const val: any = {};
        if (query.weight) {
            val.weight = +query.weight;
        }
        if (query.problems && query.id) {
            await this.probRepository.create({
                name: query.problems,
                clientId: +query.id,
                date: new Date().toDateString(),
            });
            return;
        }
        if (query.pressure) {
            val.pressure = query.pressure;
        }
        if (query.temperature) {
            val.temperature = query.temperature;
        }
        if (query.status !== undefined) {
            val.status = query.status;
        }
        if (query.id && val) {
            await this.clientRepository.update(val, { where: { id: +query.id } });
        }
    }

    // tslint:disable-next-line:no-any
    public async newNote(note: NotesDto): Promise<any> {
        return await this.notesRepository.create({
            ...note,
            date: new Date().toISOString(),
        });
    }
}
