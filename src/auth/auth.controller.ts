import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        const { username, password } = loginDto;

        if (!username || !password) {
            throw new BadRequestException('Username and password are required');
        }

        const user = await this.authService.validateUser(username, password);

        if (!user) {
            throw new BadRequestException('Invalid credentials');
        }

        return this.authService.login(user);
    }
}
