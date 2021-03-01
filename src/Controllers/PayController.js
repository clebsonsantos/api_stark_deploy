const Payment = require('../model/Payment');
const User = require('../model/User');



module.exports = {
  async index(req, res){
    const {user_id} = req.params;

    const user = await User.findByPk(user_id, {

      include: { association: 'payments'},
      
    });

    return res.json(user) // se adicionar o 'user.payment' , será retornado apenas os pagemtos do usuario pagamentos
  },
  async store(req, res){
    const {user_id} = req.params;
    const {month, money, payment_year} = req.body;

    const user = await User.findByPk(user_id);

    if(!user){
      return res.status(400).json({error: 'User not found'})
    }
    const payments = await Payment.create({
      month,
      money,
      payment_year,
      user_id
    });
    return res.json(payments)

  },
  async delete(req, res) {
    const { id} = req.params;

    const remove = await Payment.destroy({
      where: {
        id
      }
    });
    return res.json(remove);
    

  },
}