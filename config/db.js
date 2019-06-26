const env = require("./env");
const Sequelize = require("sequelize");
module.exports = new Sequelize(env.database_url, {
  port: env.port,
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: true
  }
});
