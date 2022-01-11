import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserService} from "../services/User.service";
import {CreateUserDto} from "../dto/create-user.dto";
import {User} from "../entities/User";

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly Service: UserService) {}

    @Post()
    @ApiOperation({ summary: 'Create a User book' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createDto: CreateUserDto): Promise<User> {
        return this.Service.create(createDto);
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: User,
    })
    findOne(@Param('id') id): Promise<User> {
        //return this.Service.findOne(+id);
        return null;
    }
}
