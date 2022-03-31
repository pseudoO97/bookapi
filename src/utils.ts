import {HttpStatus, ValidationPipe} from "@nestjs/common";

const VALIDATION_PIPE = new ValidationPipe({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
})

export const Validate = {
    VALIDATION_PIPE
}