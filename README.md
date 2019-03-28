# Products-Crud 
CRUD Simples para REST API de gerenciamento de produtos e categorias

## Pré-requisitos
* Nodejs

## Recomendado
* Docker
* Docker-compose

## Executando
Para executar este projeto há duas maneiras:

### Docker
Entre na pasta do projeto e execute os seguintes comandos:

    docker-compose build
    docker-compose up -d
    
Com isso, a aplicação irá iniciar na porta padrão deste projeto, 8888.


### Sem docker
Primeiramente será necessário configurar o seu banco.

Pode abrir seu editor sql favorito e executar o dump dentro da pasta `db` ou executar o seguinte comando (MySQL):
    
    mysql -u username -p < dump.sql
    
Com isso, acesse o arquivo `rest\app\config\dbconnection.js` e faça as devidas alterações para o seu banco de dados.

Em seguida entre na pasta do projeto, dentro de `rest\app` e execute os seguinte comando:
    
    npm install
    node app.js