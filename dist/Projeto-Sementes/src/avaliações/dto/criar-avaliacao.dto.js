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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarAvaliacaoDto = void 0;
const class_validator_1 = require("class-validator");
class CriarAvaliacaoDto {
}
exports.CriarAvaliacaoDto = CriarAvaliacaoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CriarAvaliacaoDto.prototype, "usuarioAvaliadoId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(4, { each: true }),
    __metadata("design:type", Number)
], CriarAvaliacaoDto.prototype, "comunicacao", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(4, { each: true }),
    __metadata("design:type", Number)
], CriarAvaliacaoDto.prototype, "proatividade", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(4, { each: true }),
    __metadata("design:type", Number)
], CriarAvaliacaoDto.prototype, "inteligenciaEmocional", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(4, { each: true }),
    __metadata("design:type", Number)
], CriarAvaliacaoDto.prototype, "flexibilidade", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(4, { each: true }),
    __metadata("design:type", Number)
], CriarAvaliacaoDto.prototype, "criatividade", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(4, { each: true }),
    __metadata("design:type", Number)
], CriarAvaliacaoDto.prototype, "observacao", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { each: true }),
    (0, class_validator_1.Min)(0, { each: true }),
    (0, class_validator_1.Max)(4, { each: true }),
    __metadata("design:type", Number)
], CriarAvaliacaoDto.prototype, "respeito", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CriarAvaliacaoDto.prototype, "comentario", void 0);
//# sourceMappingURL=criar-avaliacao.dto.js.map