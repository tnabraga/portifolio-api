# Projeto
> Portfolio API
Projeto baseado em NodeJS para disponibilização de API.
Para a versão inicial foram diponibilizados 2 endpoints. Um para exibir uma mensagem de boas vindas na tela do browser e outro para ser consumido como API REST.


## Conteúdo
* [Estrutura do Projeto](#project-structure)
* [Instalação & Execução](#install)
* [Tecnologias](#technologies)
* [Endpoints Disponiveis](#endpoints)


# Estrutura do Projeto
```
├──api
└── controler
├── data
├── routes
├── config
├── html
├──README.md
```

# Instalação & Execução
## Clonado o repositório e extraído todos os arquivos

Para clonar o projeto execute o comando abaixo.

```sh
$ git clone https://github.com/tnabraga/portifolio-api.git
```

Accesse o diretório do projeto:
```sh
cd portifolio-api
```

### Instalar dependências:

```sh
npm install
```

### Executar projeto:

```sh
npm start
```
# Tecnologias
* [NodeJs - v16.0.0](https://nodejs.org/en/) - Backend API
* [ExpressJs - 4.17.1](https://expressjs.com) - NodeJs Framework
* [npm - 7.10.0](https://nodejs.org/en/) - Node Package Manager
* [nodemon - 2.0.7](https://www.npmjs.com/package/nodemon) - Utilitário Node Restart 


# Endpoints Disponiveis
* **http://localhost:8080/** --> Executado via browser exibirá mensagem de boas vindas.
* **http://localhost:8080/api/v1/welcome** --> Executado via POSTMAN retornará um objeto JSON.

## Autor
* **Tania Braga** - Trabalho inicial

...