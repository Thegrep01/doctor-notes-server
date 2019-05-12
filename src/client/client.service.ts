import { NotesDto } from './db/client.dto';
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
                DoctorID: docId,
                status,
            },
        });
    }

    // tslint:disable:no-any
    public async getClientById(id: number): Promise<any> {
        const problems: any = await this.probRepository.find({ where: { clientId: id } });
        const client: any = await this.clientRepository.findOne({
            where: {
                id,
            },
            attributes: ['firstname', 'lastname', 'telnum', 'height', 'weight'],
        });
        return {
            problems,
            ...client,
        };
    }

    public async getNotesList(id: number): Promise<NotesDto[]> {
        return await this.notesRepository.findAll<Note>({
            where: {
                CLientID: id,
            },
            attributes: ['id', 'title', 'date'],
        });
    }

    public async updateClient(query: any): Promise<void> {
        const val: any = {};
        if (query.weight) {
            val.weight = query.weight;
        }
        if (query.problems) {
            await this.probRepository.update(query.problems, { where: { clientId: query.id } });
        }
        await this.clientRepository.update(val, { where: { id: query.id } });
    }

    // tslint:disable-next-line:no-any
    public async newNote(note: NotesDto): Promise<any> {
        return await this.notesRepository.create({
            ...note,
            date: new Date().toISOString(),
        });
    }
}
