const { Sequelize } = require("sequelize");

module.exports = function mysql(config) {
  return new Promise((resolve, reject) => {
    const sequelize = new Sequelize(config.database, config.user, config.password, {
      host: config.host,
      dialect: "mysql"
    });
    sequelize.authenticate().then(() => resolve(sequelize)).catch(reject)
  })
}

