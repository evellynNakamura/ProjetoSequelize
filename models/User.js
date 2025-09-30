const { DataTypes } = require("sequelize");
const db = require("../db/conn");

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Nome não pode estar vazio",
        },
        len: {
          args: [2, 100],
          msg: "Nome deve ter entre 2 e 100 caracteres",
        },
      },
    },
    occupation: {
      type: DataTypes.STRING(150),
      allowNull: true,
      validate: {
        len: {
          args: [0, 150],
          msg: "Profissão deve ter no máximo 150 caracteres",
        },
      },
    },
    newsletter: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Senha não pode estar vazia",
        },
        len: {
          args: [6, 255],
          msg: "Senha deve ter pelo menos 6 caracteres",
        },
      },
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: "Email não pode estar vazio" },
        isEmail: { msg: "Email inválido" },
      },
    },
  },
  {
    tableName: "users",
    indexes: [
      {
        fields: ["name"],
      },
    ],
  }
);

module.exports = User;
