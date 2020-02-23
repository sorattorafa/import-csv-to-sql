## 👨🏼‍💻 Autor

- [Rafael Soratto](https://github.com/sorattorafa)

## 🚀 Tecnologias

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)   
- [EXPRESS](https://expressjs.com/pt-br/)

 ## ✋🏻Auxiliares  
- [ESLINT](https://eslint.org/)  

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `backend-test/`;
3. Rode `yarn` para instalar as dependências;
4. Altere as credencias dentro de `/src/config/database.js`;
5. Rode `yarn sequelize db:create` para criar o banco de dados;
6. Rode `yarn sequelize db:migrate` para executar as migrations;
7. Rode `yarn dev` para iniciar o servidor. 
8. Chame a rota (https://localhost:3333/userscreatedb) para clonar o arquivo .csv na raiz do projeto; 
9. Enquanto a rota (8) está carregando os dados pro SQL:  
9.1. Pagine os dados utilizando a rota (https://localhost:3333/userspag/1),

## 📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
---
