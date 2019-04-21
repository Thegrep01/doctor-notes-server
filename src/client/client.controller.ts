import { ClientService } from './client.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express-serve-static-core';
import { ClientDto, NotesDto } from './db/client.dto';

@Controller('client')
export class ClientController {
  public constructor(private _clientService: ClientService) {}

  @Get('clients')
  public async getClients(
    @Query('docId') docId: number,
    @Query('status') status: number,
    @Res() res: Response,
  ): Promise<Response> {
    try {
      const clients: ClientDto[] = await this._clientService.getByStatus(
        docId,
        status,
      );
      return res.status(HttpStatus.OK).json({ data: clients });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        data: null,
        error: error.message,
      });
    }
  }

  @Get('notes')
  public async getNotes(
    @Query('id') id: number,
    @Res() res: Response,
  ): Promise<Response> {
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
    @Body() note: any,
    @Res() res: Response,
  ): Promise<Response> {
    try {
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
