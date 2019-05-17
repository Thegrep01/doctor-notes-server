import { Module } from '@nestjs/common';
import { clientProviders } from './db/client.provider';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
    imports: [ClientModule],
    controllers: [ClientController],
    providers: [
        ClientService,
        ...clientProviders,
    ],
})
export class ClientModule {}
