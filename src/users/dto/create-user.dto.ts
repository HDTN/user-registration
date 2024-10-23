import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'John Doe' })
    name: string;

    @ApiProperty({ example: '1980-01-01' })
    birthdate: string;

    @ApiProperty({ example: '12345678900' })
    cpf: string;

    @ApiProperty({ example: 'Ativo' })
    status: string;

    @ApiProperty({ example: 'Rua X, 123' })
    address: string;
}
