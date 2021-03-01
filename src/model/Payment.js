
const { Model, DataTypes } = require('sequelize');


class Payment extends Model  {
    static init(sequelize) {
        super.init({
          month: DataTypes.STRING,
          money: DataTypes.STRING,
          payment_year: DataTypes.INTEGER,
         

        }, {
          sequelize
        })
        
    }
    static associate(models){
      this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }
};




module.exports = Payment;
