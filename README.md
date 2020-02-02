<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>
</h1>

<h3 align="center">
  Desafio 1: Conceitos de NodeJS
</h3>

## :rocket: :alien: Objetivo!
_Criar uma aplicação para armazenar projetos e suas tarefas._

### Tecnologia utilizada

- _[Express](https://expressjs.com/pt-br/)_

### Rotas

- `[POST] /projects`: Cria novo projeto;

- `[GET] /projects`: Lista todos os projetos;

- `[PUT] /projects/:id`: Atualiza projeto com base no `id` da rota;

- `[DELETE] /projects/:id`: Exclui projeto com base no `id` da rota;

- `[POST] /projects/:id/tasks`: Cria nova tarefa com base no `id`  do projeto


### Exemplos

- `[GET]/projects`
```js
[
  {
    id: "1",
    title: "Projeto 1",
    tasks: []
  },
  {
    id: "2",
    "title": "Projeto 2",
    tasks: []
  }
];
```


- `[POST] /projects`
```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: []
  }
];
```
_Feito com muita dedicação_ :purple_heart: _**Rafael Gimenez**_
## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
