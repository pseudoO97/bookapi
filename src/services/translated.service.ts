import { Injectable } from '@nestjs/common';
import { CreateTranslatedDto } from '../dto/create-translated.dto';
import { Translated } from '../entities/translated.entity';

@Injectable()
export class TranslatedService {
  private readonly translateds: Translated[] = [];

  create(translated: CreateTranslatedDto): Translated {
    return null;
  }

  findOne(id: number): Translated {
    return this.translateds[id];
  }
}
