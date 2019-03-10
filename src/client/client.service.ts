import { ClientDto } from './db/client.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Client } from './db/client.model';

@Injectable()
export class ClientService {
    public constructor(
        @Inject('ClientRepository') private readonly clientRepository: typeof Client) { }

    public async getByStatus(docId: number, status: number): Promise<ClientDto[]> {
        return await this.clientRepository.findAll<Client>({
            where: {
                DoctorID: docId,
                status,
            },
            attributes: ['id', 'firstname', 'lastname', 'telnum'],
        });
    }

}
