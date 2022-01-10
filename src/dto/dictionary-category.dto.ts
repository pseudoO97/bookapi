import { IsInt} from 'class-validator';

export class CreateDictionaryCategoryDto {
 

  @IsInt()
  id: number;

  @IsInt()
  id_category: number;
 

}