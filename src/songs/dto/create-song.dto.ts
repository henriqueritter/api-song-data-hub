export type AvailableSongKeys =
  | 'A'
  | 'A#'
  | 'B'
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#';

export class CreateSongDto {
  name: string;
  tempo: number;
  tempoSignature: string;
  songKey: AvailableSongKeys;
  observation?: string;
}
