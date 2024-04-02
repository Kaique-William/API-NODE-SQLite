
# API node.js com SQLite 

aqui veremos um pequeno e simples CRUD usando SQLite como banco e node como as principais stacks de desenvolvimento
## Documentação da API

#### traz todas as pessoas cadastradas

```http
  GET /pessoas
```

#### traz a pessoa especifica

```http
  POST /pessoa
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**.|


#### cadastra pessoas

```http
  POST /pessoa
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. O nome que deseja adcionar, caso não informe vira como null |
| `idade ` | `number` | **Obrigatório**. A idade que deseja adcionar, caso não informe vira como null |

#### atualiza o cadastro

```http
  PUT /pessoa
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `number` | **Obrigatório**. Para mudar o cadastro especifica |
| `nome` | `string` | **Obrigatório**. O nome que deseja adcionar, caso não informe vira como null |
| `idade ` | `number` | **Obrigatório**. A idade que deseja adcionar, caso não informe vira como null |

#### Deleta pessoa

```http
  DELETE /pessoa
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID da pessoa que deseja apagar |



## Stack utilizada

**Back-end:** Node, SQLite


## Referência

 - [Awesome Readme Templates](https://www.youtube.com/watch?v=yEpiT-N2DUc&list=PLygIEirBzJi4lTC-5nzfhEyxuKq2y1uiR&pp=iAQB)
 - [SQLite](https://www.npmjs.com/package/sqlite)
 - [SQLite3](https://www.npmjs.com/package/sqlite3)
 - [Express](https://www.npmjs.com/package/express)

