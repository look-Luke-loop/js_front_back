import User from '../models/User';


class UserController {

  async store(req, res) {
    try{
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      res.json({ id, nome, email });
    } catch(e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }

  }

  //index
  async index(req, res){
    try{
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    }catch (e){
      return res.json(null);
    }
  }

  //show
  async show(req, res){
    try{
      const user = await User.findByPk(req.params.id);
      const { id, nome, email} = user;
      return res.json({ id, nome, email});
    }catch (e){
      return res.json(null);
    }
  }

  //update
  async update(req, res){
    try{
      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors: ['usuário não existe']
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });

    }catch (e){
      const errors = e.errors ? e.errors.map(err => err.message) : ['Erro desconhecido'];
      console.log("erro aqui: ", e);
      res.status(400).json({ errors });
    }
  }

  //delete
  async delete(req, res){
    try{
      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors: ['usuário não existe']
        });
      }

      await user.destroy();

      return res.json({"msg":"usuário deletado"},user);
    }catch (e){
      res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

}
export default new UserController();
