import {IsEmail, IsNotEmpty, IsString, Length, Matches} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class LoginUserDto {

  @IsString()
  @IsNotEmpty({
    message: "Le mot de passe ne doit pas être vide."
  })
  @Length(6, 16, {
    message: "Le mot de passe doit faire plus de 6 et moins de 16 caractères."
  })
  @Matches(/^[a-zA-Z0-9-_]+/, {
    message: "Le mot de passe doit contenir uniquement des lettres, chiffres et tirets."
  })
  @ApiProperty({description: "Password of the account"})
  readonly password: string;

  @IsNotEmpty()
  @IsEmail({}, {
    message:"Merci de bien respecter le format email."
  })
  @ApiProperty({description: "Email of the account"})
  readonly email: string;
}