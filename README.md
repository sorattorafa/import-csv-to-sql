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

## Instalação 

1. Faça um clone desse repositório;
2. Entre na pasta `import-csv-to-sql/`;
3. Rode `yarn` para instalar as dependências;
4. Altere as credencias dentro de `/src/config/database.js`;
5. Rode `yarn sequelize db:create` para criar o banco de dados;
6. Rode `yarn sequelize db:migrate` para executar as migrations; 

## Execução 

7. Rode `yarn dev` para iniciar o servidor. 
8. Chame a rota (https://localhost:3333/userscreatedb) para clonar o arquivo .csv na raiz do projeto para o banco SQL. 
9. Enquanto a rota (8) está carregando os dados pro SQL:  
9.1. Pagine os dados utilizando a rota (https://localhost:3333/userspag/1).  
9.1.1. Esta rota retorna os dados páginados em conjunto com informações em tempo real como a quantidade total de usuários e páginas criados até o momento, caso a rota 8 não tenha terminado sua execução de cadastro por completo está rota mostra os dados já inseridos no banco. 
10. Para visualizar um único usuário: Chame a rota (https://localhost:3333/users/:id) onde o id é o número do usuário criado. 
11. Esse usuário pode estar na lista de preferência 1,2 ou 1 e 2, para atualzizar sua lista de prioridade basta chamar a rota (https://localhost:3333/user/:id) passando o id do usuário e um body com o atributo list que aceita os seguintes valores: ("1","2","1, 2"), o último valor significa que o usuário está presente nas duas listas de prioridade. 
 
## Testes 
12.Todas as rotas podem ser testadas com o comando `yarn test`, exceto a rota de clonar o banco de dados que necessita de mais tempo para ser executada. 

## 📝 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
---
