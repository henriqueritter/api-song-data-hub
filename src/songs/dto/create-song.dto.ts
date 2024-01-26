import { IsIn, IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

const availableSongKeys = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
];

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  tempo: number;

  @IsNotEmpty()
  @IsString()
  tempoSignature: string;

  @IsNotEmpty()
  @IsIn(availableSongKeys)
  songKey: string;

  observation?: string;
}
