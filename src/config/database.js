require('dotenv').config()


module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'starkfitness',
  timezone: "-03:00",
  define: {
    timestamps: true,
    underscored: true,
  },
};

