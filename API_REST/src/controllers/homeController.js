import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
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
export default new HomeController();
