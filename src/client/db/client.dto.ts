export class ClientDto {
  public readonly id!: number;
  public readonly firstname!: string;
  public readonly lastname!: string;
  public readonly telnum?: string;
  public readonly status!: number;
  // tslint:disable-next-line: variable-name
  public readonly DoctorID!: number;
}

// tslint:disable-next-line: max-classes-per-file
export class NotesDto {
  public readonly id?: number;
  public readonly title!: string;
  public readonly note!: string;
  public readonly medicaion?: string;
  public readonly activityCode!: string;
  public readonly date!: Date;
  // tslint:disable-next-line: variable-name
  public readonly CLientID!: number;
}
