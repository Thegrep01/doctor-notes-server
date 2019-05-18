import { ClientService } from './client.service';
import { Body, Controller, Get, HttpStatus, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express-serve-static-core';
import { ClientDto, NotesDto } from './db/client.dto';

@Controller('client')
export class ClientController {
    public constructor(private _clientService: ClientService) {}

    @Get('clients')
    public async getClients(
        @Query('docId') docId: number,
        @Query('status') status: number,
        @Res() res: Response
    ): Promise<Response> {
        try {
            const clients: ClientDto[] = await this._clientService.getByStatus(docId, status);
            return res.status(HttpStatus.OK).json({ data: clients });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                data: null,
                error: error.message,
            });
        }
    }

    @Get('clientInfo')
    public async getInfo(@Query('id') id: number, @Res() res: Response): Promise<Response> {
        try {
            const info: ClientDto | null = await this._clientService.getClientById(id);
            console.log(info);
            return res.status(HttpStatus.OK).json({ data: info });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                data: null,
                error: error.message,
            });
        }
    }

    @Put('updateClient')
    // tslint:disable-next-line:no-any
    public async updateClient(@Body() data: any, @Res() res: Response): Promise<Response> {
        try {
            await this._clientService.updateClient(data);
            return res.status(HttpStatus.OK);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                data: null,
                error: error.message,
            });
        }
    }

    @Get('notes')
    public async getNotes(@Query('id') id: number, @Res() res: Response): Promise<Response> {
        try {
            const notes: NotesDto[] = await this._clientService.getNotesList(id);
            return res.status(HttpStatus.OK).json({ data: notes });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                data: null,
                error: error.message,
            });
        }
    }

    @Post('note')
    public async newNote(
        // tslint:disable-next-line:no-any
        @Body() data: any,
        @Res() res: Response
    ): Promise<Response> {
        try {
            const { note, diagnos } = data;
            if (diagnos) {
                await this._clientService.updateClient({ id: note.clientId, problems: diagnos });
            }
            await this._clientService.newNote({ ...note, CLientID: note.clientId });
            return res.status(HttpStatus.OK).json();
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                data: null,
                error: error.message,
            });
        }
    }
}
