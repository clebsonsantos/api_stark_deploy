
const { Model, DataTypes } = require('sequelize');


class User extends Model  {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            payday: DataTypes.INTEGER

        }, {sequelize})


    }
    static associate(models){
      this.hasMany(models.Payment, {foreignKey: 'user_id', as: 'payments'})
    }
};




module.exports = User;


