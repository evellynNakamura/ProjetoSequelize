# Projeto: Sistema CRUD com Node.js + Sequelize

Este projeto implementa um sistema CRUD (Create, Read, Update, Delete) para **usuários** e seus **endereços**, usando:

- Node.js + Express
- Sequelize
- Handlebars
- PostgreSQL por padrão 
- Design responsivo com CSS simples

---

## Arquivos do projeto:

- `package.json`
- `index.js`
- `db/conn.js`
- `models/User.js`
- `models/Address.js`
- `views/` (templates Handlebars)
- `public/css/styles.css`
- `banco_instrucoes_postgres.sql`
- `banco_instrucoes_mysql.sql`
- `.env.example`
- `README.md` (este arquivo)
- `.gitignore`

---

## Como rodar (PostgreSQL)

1. Instale dependências:
```bash
npm install
```

2. Crie o banco e usuário (exemplo usando psql):
```sql
-- no terminal psql:
CREATE USER appuser WITH PASSWORD 'senha';
CREATE DATABASE meubanco OWNER appuser;
GRANT ALL PRIVILEGES ON DATABASE meubanco TO appuser;
```

3. Dentro do arquivo `conn.js`:
```
Coloque o nome do seu banco e a sua password dentro do parâmetro do método Sequelize
```

4. Rode a aplicação:
```bash
npm run dev
# ou
npm start
```

5. Abra no navegador:
```
http://localhost:3000
```

---
