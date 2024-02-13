import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity';

@Injectable()
export class SongsService {
  constructor(@InjectRepository(Song) private repository: Repository<Song>) {}

  async create(createSongDto: CreateSongDto) {
    const song = this.repository.create(createSongDto);

    await this.repository.save(song);

    return song;
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateSongDto: UpdateSongDto) {
    const song = await this.repository.findOne({ where: { id } });

    song.name = updateSongDto.name ? updateSongDto.name : song.name;
    song.observation = updateSongDto.observation
      ? updateSongDto.observation
      : song.observation;
    song.songKey = updateSongDto.songKey ? updateSongDto.songKey : song.songKey;
    song.tempo = updateSongDto.tempo ? updateSongDto.tempo : song.tempo;
    song.tempoSignature = updateSongDto.tempoSignature
      ? updateSongDto.tempoSignature
      : song.tempoSignature;

    await this.repository.save(song);
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
