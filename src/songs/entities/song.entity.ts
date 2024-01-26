import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'songs' })
export class Song {
  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }

    if (!this.observation) {
      this.observation = '';
    }
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  tempo: number;

  @Column({ length: 6 })
  tempoSignature: string;

  @Column({ length: 2 })
  songKey: string;

  @Column()
  observation?: string;
}
