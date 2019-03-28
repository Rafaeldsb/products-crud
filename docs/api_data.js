define({ "api": [
  {
    "type": "delete",
    "url": "/categories/:id",
    "title": "Deletar",
    "group": "Categorias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id da categoria</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Dados apagados com sucesso.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/category.js",
    "groupTitle": "Categorias",
    "name": "DeleteCategoriesId"
  },
  {
    "type": "get",
    "url": "/categories",
    "title": "Listar",
    "group": "Categorias",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"nome\": \"Informática\",\n       \"juros\": 5,\n       \"created_at\": 0,\n       \"updated_at\": 0\n   },\n   {\n       \"id\": 2,\n       \"nome\": \"Automotivo\",\n       \"juros\": 2.5,\n       \"created_at\": 0,\n       \"updated_at\": 0\n   },\n   {\n       \"id\": 3,\n       \"nome\": \"Móveis\",\n       \"juros\": 1,\n       \"created_at\": 0,\n       \"updated_at\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/category.js",
    "groupTitle": "Categorias",
    "name": "GetCategories"
  },
  {
    "type": "get",
    "url": "/categories/:id",
    "title": "Visualizar",
    "group": "Categorias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id da categoria</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 3,\n       \"nome\": \"Móveis\",\n       \"juros\": 1,\n       \"created_at\": 0,\n       \"updated_at\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/category.js",
    "groupTitle": "Categorias",
    "name": "GetCategoriesId"
  },
  {
    "type": "post",
    "url": "/categories",
    "title": "Inserir",
    "group": "Categorias",
    "parameter": {
      "examples": [
        {
          "title": "Categoria",
          "content": "{\n    \"nome\": \"Móveis\",\n    \"juros\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Dados inseridos com sucesso.\",\n   \"id\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/category.js",
    "groupTitle": "Categorias",
    "name": "PostCategories"
  },
  {
    "type": "put",
    "url": "/categories/:id",
    "title": "Atualizar",
    "group": "Categorias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id da categoria</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Categoria",
          "content": "{\n    \"nome\": \"Móveis\",\n    \"juros\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Atualizado com sucesso.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/category.js",
    "groupTitle": "Categorias",
    "name": "PutCategoriesId"
  },
  {
    "type": "delete",
    "url": "/products/:id",
    "title": "Deletar",
    "group": "Produtos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id do produto</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Dados apagados com sucesso.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/product.js",
    "groupTitle": "Produtos",
    "name": "DeleteProductsId"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Listar",
    "group": "Produtos",
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"idCategoria\": 1,\n       \"nome\": \"Info 1.1\",\n       \"descricao\": \"Desc info 1\",\n       \"valor\": 10,\n       \"created_at\": 1553731343,\n       \"updated_at\": 1553731343\n   },\n   {\n       \"id\": 2,\n       \"idCategoria\": 2,\n       \"nome\": \"Auto 2.1\",\n       \"descricao\": \"Teste\",\n       \"valor\": 46.5,\n       \"created_at\": 1553731343,\n       \"updated_at\": 1553731343\n   },\n   {\n       \"id\": 4,\n       \"idCategoria\": 2,\n       \"nome\": \"Auto 2.1\",\n       \"descricao\": \"Teste\",\n       \"valor\": 46.5,\n       \"created_at\": 1553731343,\n       \"updated_at\": 1553731343\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/product.js",
    "groupTitle": "Produtos",
    "name": "GetProducts"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Visualizar",
    "group": "Produtos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id do produto</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"idCategoria\": 1,\n       \"nome\": \"Info 1.1\",\n       \"descricao\": \"Desc info 1\",\n       \"valor\": 10,\n       \"created_at\": 1553731343,\n       \"updated_at\": 1553731343\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/product.js",
    "groupTitle": "Produtos",
    "name": "GetProductsId"
  },
  {
    "type": "get",
    "url": "/products/:id/parcela/:qtd",
    "title": "Parcelas",
    "group": "Produtos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id do produto</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "qtd",
            "description": "<p>Quantidade de parcelas sobre o produto</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"product\": {\n       \"id\": 1,\n       \"nome\": \"Info 1.1\",\n       \"descricao\": \"Desc info 1\",\n       \"valor\": 10,\n       \"created_at\": 0,\n       \"updated_at\": 0\n   },\n   \"parcela\": {\n       \"quantidade\": \"7\",\n       \"juros\": 5,\n       \"valor\": 1.728198184461707\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/product.js",
    "groupTitle": "Produtos",
    "name": "GetProductsIdParcelaQtd"
  },
  {
    "type": "post",
    "url": "/products",
    "title": "Inserir",
    "group": "Produtos",
    "parameter": {
      "examples": [
        {
          "title": "Produto",
          "content": "{\n    \"idCategoria\": 2,\n    \"nome\": \"Auto 2.1\",\n    \"descricao\": \"Teste\",\n    \"valor\": 46.5,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Dados inseridos com sucesso.\",\n   \"id\": 5\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/product.js",
    "groupTitle": "Produtos",
    "name": "PostProducts"
  },
  {
    "type": "put",
    "url": "/products/:id",
    "title": "Atualizar",
    "group": "Produtos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id do produto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Produto",
          "content": "{\n    \"idCategoria\": 2,\n    \"nome\": \"Auto 2.1\",\n    \"descricao\": \"Teste\",\n    \"valor\": 46.5,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Atualizado com sucesso.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "rest/app/routes/product.js",
    "groupTitle": "Produtos",
    "name": "PutProductsId"
  }
] });
