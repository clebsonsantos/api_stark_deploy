const User = require("../model/User");

module.exports = {
  async index(req, res) {
     const users = await User.findAll({
         order: [["name"]],
       });
       return res.status(200).json(users);  
  },

  async store(req, res) {
    const { name, phone, payday } = req.body;

    const user = await User.create({ name, phone, payday });

    return res.json(user);
  },

  async delete(req, res) {
    const { id } = req.params;

    const remove = await User.destroy({
      where: {
        id,
      },
    });
    return res.json(remove);
  },
  async renew(req, res) {
    const { name, phone, payday } = req.body;

    const { id } = req.params;

    const user = await User.update(
      { name, phone, payday },
      {
        where: {
          id,
        },
      }
    );
    return res.json(user);
  }
};
