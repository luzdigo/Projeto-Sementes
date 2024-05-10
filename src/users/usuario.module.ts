// usuario.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';
import { EmailEhUnicoValidator } from './validacao/email-eh-unico.validator';
import { UsuarioEntity } from './entity/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [UsuarioController],
  providers: [UsuarioRepository, EmailEhUnicoValidator],
})
export class UsuarioModule {}
