import {HttpStatus, ValidationPipe} from "@nestjs/common";

const VALIDATION_PIPE = new ValidationPipe({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    stopAtFirstError: true,
    validationError: {
        value: true
    },
})

export const Validate = {
    VALIDATION_PIPE
}