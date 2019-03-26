# Products-Crud 
CRUD Simples para REST API de gerenciamento de produtos e categorias

## Pré-requisitos
* Nodejs

## Recomendado
* Docker

## Executando
Para executar este projeto há duas maneiras:

### Docker
Entre na pasta do projeto e execute os seguintes comandos:

    docker-compose build;
    docker-compose up -d;
    
Com isso, a aplicação irá iniciar na porta padrão deste projeto, 8888.


### Sem docker
Entre na pasta do projeto, dentro de `rest\app` e execute o seguinte comando:

    node app.js;