-- banco_instrucoes_postgres.sql
-- Cria usuário (opcional) e banco para usar localmente
-- Execute no terminal psql (psql -U postgres):

CREATE USER appuser WITH PASSWORD 'senha';
CREATE DATABASE meubanco OWNER appuser;
GRANT ALL PRIVILEGES ON DATABASE meubanco TO appuser;

-- OBS: as tabelas são criadas automaticamente pelo Sequelize com conn.sync(),
-- então não é necessário criar as tabelas manualmente aqui.
