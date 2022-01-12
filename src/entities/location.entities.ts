import { IsInt ,IsString} from 'class-validator';

export class Location {
 

  @IsInt()
  id: number;

  @IsString()
   country : string;

   @IsString()
   name: string;

} 