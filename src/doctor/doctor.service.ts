import { DoctorDto } from './db/doctor.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Doctor } from './db/doctor.model';

@Injectable()
export class DoctorService {
    public constructor(
        @Inject('DoctorRepository') private readonly doctorRepository: typeof Doctor) { }

    public async login(login: string, password: string): Promise<string> {
        const doctor: DoctorDto | null = await this.doctorRepository.findOne({ where: { login } });
        if (doctor) {
            if (password === doctor.password) {
                if (!doctor.token) {
                    doctor.token = this._genToken();
                    this.doctorRepository.update({ token: doctor.token }, { where: { login } });
                }
                return doctor.token;
            }
            throw Error('Password do not match');
        }
        throw Error('No doctor!');
    }

    private _genToken(): string {
        let text: string = '';
        const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i: number = 0; i < 10; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
