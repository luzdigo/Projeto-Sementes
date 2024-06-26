"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioEntityRepository = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./entity/usuario.entity");
const typeorm_2 = require("@nestjs/typeorm");
let UsuarioEntityRepository = class UsuarioEntityRepository extends typeorm_1.Repository {
    constructor(entityManager) {
        super(usuario_entity_1.UsuarioEntity, entityManager);
        this.entityManager = entityManager;
    }
};
exports.UsuarioEntityRepository = UsuarioEntityRepository;
exports.UsuarioEntityRepository = UsuarioEntityRepository = __decorate([
    (0, typeorm_1.EntityRepository)(usuario_entity_1.UsuarioEntity),
    __param(0, (0, typeorm_2.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], UsuarioEntityRepository);
//# sourceMappingURL=usuario-entity.repository.js.map