import { IsInt ,IsString,IsDate} from 'class-validator';

export class CreateBookDto {
 

  @IsInt()
  id: number;

  @IsString()
   title : string;

   @IsString()
   summary: string;

   @IsString()
   link_preview: string;

   @IsDate()
   date_released: Date;

}