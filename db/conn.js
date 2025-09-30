const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('nomeBanco', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log, // Mostra as queries SQL no console
  define: {
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
    underscored: false, // Usa camelCase ao invés de snake_case
  },
  pool: {
    max: 10, // Máximo de conexões simultâneas
    min: 0,  // Mínimo de conexões
    acquire: 30000, // Tempo máximo para obter conexão (30s)
    idle: 10000, // Tempo máximo que uma conexão pode ficar inativa (10s)
  },
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error.message);
  }
}

testConnection();

module.exports = sequelize;
