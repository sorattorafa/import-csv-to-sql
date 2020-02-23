# Appmoove: Teste prático para back-end developer

O teste consiste em criar uma API REST que cadastra usuários e busca por nome e e-mail.
Faça o download do arquivo [users.csv.gz](https://drive.google.com/file/d/1ROkcATlFjPvNCQ2Aiko12ajmOnk29-gR/view?usp=sharing) contendo 10 milhões de usuários que devem ser utilizados na busca. Os dados estão estruturados em `id`, `name`, `email`.


## Exemplo

| id | name | email |
|----|------|-------|
80925ab5-00c0-4491-9952-c126563edf8b|Félix Braga|Fabiano.Macedo66@bol.com.br
ad049298-a454-4632-a748-e660b52b3d07|Eduardo Carvalho|Raul.Franco18@yahoo.com
19be0c84-b3a5-4a34-81f5-6896bde78c18|Cecília Saraiva Neto|Yago.Braga61@bol.com.br
ea04f9a6-0616-4b88-b242-617f80703dca|Pablo Silva|Carla4@hotmail.com
104058f7-fe05-412c-a410-edf1176476ce|Larissa Martins|Gustavo80@gmail.com

## Requisitos

Você deve usar **NodeJS** e **MYSQL** para construção da solução. Mas fique a vontade na escolha das demais tecnologias que você vai usar e tente montar uma solução completa para rodar a aplicação.
Você deve apresentar uma solução para a importação dos 10 milhões de usuários, dado que é um arquivo de texto e você deve importar para um banco SQL.

### Cadastro de usuário

Você deve criar um recurso (rota) para cadastrar usuários nas base que você estruturou. Este recurso deve gerar um `id`, armazenar o `nome`, `email` do usuário e em qual lista de prioridade o usuário pertence (1,2) ou o padrão onde o usuário não está associado a nenhuma lista.

Você deve fazer as devidas validações nos dados.

### Listagem de usuários

A rota de listagem dos dados deve possuir filtro por nome e e-mail, os resultados devem retornar paginados de 20 em 20 registros, permitindo ir para a página dois e listar os 20 intens desta página, faça isso recebendo `query params` na rota.


## Avaliação

É importante conter um arquivo `readme.md` na raiz do projeto contendo quaisquer instruções necessárias. Fique a vontade para, nesse arquivo, explicar melhor qualquer escolha que tenha feito ou algo que gostaria ter investido mais tempo ou feito diferente.

### Critérios que serão considerados na avaliação:

#### Entrega de valor

- Funcionar
- Cumprir os requisitos

#### Boas Práticas

- Arquitetura
- Modelagem de dados
- Performance 
- Domínio da linguagem de programação
- Estrutura do código
- Organização do código
- Design Patterns

#### Qualidade do código

- Legibilidade do código
- Manutenibilidade do código

#### Diferenciais

- Testes unitários
- Cobertura de testes

### Dicas

- Utilize uma ferramenta com interface para trabalhar com Mysql, será melhor que executar comandos no terminal.

### Como submeter os desafio

Após término envie seu projeto <nome_candidato>.zip no e-mail leonardo.baiser@appmoove.com.br, adicione a pasta do projeto um dump do seu BD após finalizar o teste.

    **Atenção: Remova a pasta `node_modules` antes de zipar o projeto.**

### Dúvidas
Mande um e-mail para: leonardo.baiser@appmoove.com.br