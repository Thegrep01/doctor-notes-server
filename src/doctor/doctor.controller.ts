import { DoctorService } from './doctor.service';
import { Controller, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { Response } from 'express-serve-static-core';

@Controller('doctor')
export class DoctorController {

// tslint:disable-next-line: variable-name
    constructor(private _doctorService: DoctorService) { }

    @Post('login')
    public async login(
        @Body() data: { login: string, password: string },
        @Res() res: Response,
    ) {
        try {
            const { login, password } = data;
            const token = await this._doctorService.login(login, password);
            return res.status(HttpStatus.OK).json({ data: token });
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST)
                .json({
                    data: null,
                    error: error.message,
                });
        }
    }
}
