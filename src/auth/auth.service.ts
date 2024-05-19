import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../users/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { UsuarioEntity } from '../users/entity/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<UsuarioEntity | null> {
    return this.usuarioService.validateUser(email, senha);
  }

  async login(user: UsuarioEntity) {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
