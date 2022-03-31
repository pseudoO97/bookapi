import {BadRequestException, Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from '../dto/create-user.dto';
import {UserEntity} from '../entities/user.entity';
import {UserService} from '../services/user.service';
import {Validate} from "../utils";
import {LoginUserDto} from "../dto/login-user.dto";
import * as bcrypt from "bcrypt";
import {JwtService} from "@nestjs/jwt";
import {JwtAuthGuard} from "../jwt/auth/jwd-auth.guard";

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly service: UserService,
                private readonly jwtService: JwtService){}

    @Post('/register')
    @ApiOperation({ summary: 'Create a UserEntity' })
    @ApiBody({type:UserEntity, description:"Insert a new user."})
    @ApiResponse({ status: 200, description: 'The user has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 422, description: 'Miss matching values. Unprocessable Entity' })
    async register(@Body(Validate.VALIDATION_PIPE) createDto: CreateUserDto): Promise<UserEntity> {
        const user = await this.service.create(createDto);

        //Creation du token
        user.token = await this.jwtService.signAsync({id: user.id});

        return await this.service.update(user);
    }

    @Post('/login')
    @ApiOperation({summary: 'Login into an account User'})
    @ApiBody({type: LoginUserDto, description: "Get the user data"})
    @ApiResponse({ status: 200, description: 'The user has been successfully logged in.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 422, description: 'Miss matching values. Unprocessable Entity' })
    async login(@Body(Validate.VALIDATION_PIPE) logginDto: LoginUserDto): Promise<UserEntity> {
        //On récupère le compte par l'email
        const userFindByMail = await this.service.findOne({where: {email: logginDto.email}});

        //On vérifie que l'user existe
        if(!userFindByMail) {
            throw new BadRequestException("L'email est introuvable.");
        }

        //On vérifie que les mots de passes soient egaux
        if(!(await bcrypt.compare(logginDto.password, userFindByMail.password))) {
            throw new BadRequestException("Le mot de passe n'est pas indentique.");
        }

        //Creation du token
        userFindByMail.token = await this.jwtService.signAsync({id: userFindByMail.id});

        //On met le token à jour
        return await this.service.update(userFindByMail);
    }

    @Get(':pseudo')
    @ApiResponse({
        status: 200,
        description: 'The found user',
        type: UserEntity,
    })
    @ApiResponse({
        status: 401,
        description: 'Unauthorized access'
    })
    @UseGuards(JwtAuthGuard)
    async findOne(@Param('pseudo') pseudo:string): Promise<any> {
        const find = await this.service.findOne({where: {pseudo: pseudo}});

        const { password, email, ...result} = find;

        return result;
    }

}
