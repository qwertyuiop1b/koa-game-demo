const { DataTypes } = require("sequelize");

/**
 * 
 * @param {import("sequelize").Sequelize} sequelize 
 */
async function createUserModel(sequelize) {
  const userModel = sequelize.define("user", {
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kills: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE
    }

  }, {
    freezeTableName: true
  })
  await userModel.sync({force: false})
}


module.exports = {
  createUserModel
}

