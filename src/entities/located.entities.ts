import { IsInt } from 'class-validator';

export class CreatelocatedDto {
 

  @IsInt()
  id: bigint ;

  @IsInt()
  id_location: bigint;
} 