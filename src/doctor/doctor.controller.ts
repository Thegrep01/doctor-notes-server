import { DoctorService } from './doctor.service';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express-serve-static-core';

@Controller('doctor')
export class DoctorController {

    public constructor(private _doctorService: DoctorService) { }

    @Post('login')
    public async login(
        @Body() data: { login: string, password: string },
        @Res() res: Response,
    ): Promise<Response> {
        console.log(data);
        try {
            const { login, password } = data;
            const token: string = await this._doctorService.login(login, password);
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
