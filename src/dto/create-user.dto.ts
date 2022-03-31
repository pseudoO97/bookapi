import {IsEmail, IsNotEmpty, IsString, Length, Matches} from 'class-validator';

export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  @Length(6, 16, {
    message: "Le mot de passe doit faire plus de 6 et moins de 16 caractères."
  })
  @Matches(/^[a-zA-Z0-9-_]+/, {
    message: "Le mot de passe doit contenir uniquement des lettres, chiffres et tirets."
  })
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 24, {
    message: "Le pseudo doit faire plus de 4 et moins de 24 caractères."
  })
  @Matches(/^[a-zA-Z]+$/, {
    message: "Le pseudo ne peut contenir que des lettres."
  })
  readonly pseudo : string;

  @IsNotEmpty()
  @IsEmail({}, {
    message:"Merci de bien respecter le format email."
  })
  readonly email: string;
}