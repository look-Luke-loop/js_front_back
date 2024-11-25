"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController {
  async index(req, res) {
    const novoAluno = await _Aluno2.default.create({
      nome: 'john',
      sobrenome: 'doe',
      email: 'johndoe@gmail.com',
      idade: 24,
      peso: 75,
      altura: 1.6,
    });
    res.json(novoAluno);
  }
}
exports. default = new HomeController();
