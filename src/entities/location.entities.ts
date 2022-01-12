import { IsInt ,IsString} from 'class-validator';

export class CreatelocationDto {
 

  @IsInt()
  id: number;

  @IsString()
   country : string;

   @IsString()
   name: string;

} 