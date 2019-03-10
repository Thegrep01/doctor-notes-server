export class ClientDto {
    public readonly id!: number;
    public readonly firstname!: string;
    public readonly lastname!: string;
    public readonly telnum?: string;
    public readonly status!: number;
    // tslint:disable-next-line: variable-name
    public readonly DoctorID!: number;
}
