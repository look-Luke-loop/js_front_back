import Sequelize, { Model } from 'sequelize';
import appConfig from '../cofig/appConfig';

export default class Foto extends Model {

  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'nome não pode ser vazio'
          }
        }
      },

      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            msg: 'filename não pode ficar vazio'
          }
        }
      },

      url: {
        type: Sequelize.VIRTUAL,
        get(){
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        }
      }

    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models){
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }

}
