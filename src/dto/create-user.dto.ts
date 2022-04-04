import {IsEmail, IsEmpty, IsNotEmpty, IsString, Length, Matches} from 'class-validator';

export class CreateUserDto {

  @IsString({
    message: "Le mot de passe doit être alpha-numérique."
  })
  @IsNotEmpty({
    message: "Le mot de passe ne doit pas être vide."
  })
  @Length(4, 16, {
    message: "Le mot de passe doit faire plus de 4 et moins de 16 caractères."
  })
  readonly password: string;

  @IsString({
    message: "Le pseudo doit être alpha-numérique."
  })
  @IsNotEmpty({
    message: "Le pseudo ne doit pas être vide."
  })
  @Length(4, 16, {
    message: "Le pseudo doit faire plus de 4 et moins de 24 caractères."
  })
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: "Le pseudo ne peut contenir que des lettres et chiffres."
  })
  readonly pseudo : string;

  @IsNotEmpty({
    message: "L'adresse mail ne doit pas être vide."
  })
  @IsEmail({}, {
    message:"Le champ email n'a pas le bon format."
  })
  readonly email: string;
}