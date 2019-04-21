import { ClientDto, NotesDto } from './db/client.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Client, Note } from './db/client.model';

@Injectable()
export class ClientService {
  public constructor(
    @Inject('ClientRepository')
    private readonly clientRepository: typeof Client,
    @Inject('NoteRepository') private readonly notesRepository: typeof Note,
  ) {}

  public async getByStatus(
    docId: number,
    status: number,
  ): Promise<ClientDto[]> {
    return await this.clientRepository.findAll<Client>({
      where: {
        DoctorID: docId,
        status,
      },
    });
  }

  public async getNotesList(id: number): Promise<NotesDto[]> {
    return await this.notesRepository.findAll<Note>({
      where: {
        CLientID: id,
      },
      attributes: ['id', 'title', 'date'],
    });
  }

  // tslint:disable-next-line:no-any
  public async newNote(note: NotesDto): Promise<any> {
    return await this.notesRepository.create({
      ...note,
      date: new Date().toISOString(),
    });
  }
}
