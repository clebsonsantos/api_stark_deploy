const User = require("../model/User");

module.exports = {
  async index(req, res) {

     /* const { name } = req.query;
    

    if(name === null){
      const users = await User.findAll({
        order: [["name"]],
      });
      return res.status(200).json(users);
    }else{
      const user = await User.findOne({
        where: {
          name: name
        }
      })
      return res.status(200).json(user)
    } */
 
     /*  const { id, name, phone, payday } = req.query;
      const where = {

      },

      if(id) where.id = id
      if(name) where.name = name
      if(phone) where.phone = phone
      if(payday) where.payday = payday
      
      

      const data = await User.findAll({
        where,
      });

      console.log(data)
      return res.status(200).json(data); */
     
       
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
