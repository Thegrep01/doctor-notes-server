import { ClientService } from './client.service';
import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express-serve-static-core';
import { ClientDto } from './db/client.dto';

@Controller('client')
export class ClientController {

    public constructor(private _clientService: ClientService) { }

    @Get('clients')
    public async getClients(
        @Query('docId') docId: number,
        @Query('status') status: number,
        @Res() res: Response,
    ): Promise<Response> {
        try {

            const clients: ClientDto[] = await this._clientService.getByStatus(docId, status);
            return res.status(HttpStatus.OK).json({ data: clients });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST)
                .json({
                    data: null,
                    error: error.message,
                });
        }
    }

}
