import { Injectable } from '@nestjs/common';
import { CreateLangDto } from '../dto/create-lang.dto';
import { Lang } from '../entities/lang.entity';

@Injectable()
export class LangService {
  private readonly langs: Lang[] = [];

  create(lang: CreateLangDto): Lang {
    return null;
  }

  findOne(id: number): Lang {
    return this.langs[id];
  }
}
