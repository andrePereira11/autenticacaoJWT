# Teste da JWT 

JWT é a abreviação para Json Web Token. Este projeto é uma API com a finalidade de, maneira básica, implementar e mostrar sua utilização. 

Foi utilizado a RTE (Runtime Environment) nodeJS para tal aplicação.

<img src="https://img.shields.io/static/v1?label=npm&message=v7.0.2&color=FFDC28&style=for-the-badge&logo=ghost"/>

## Documentação Postman
[Acesse a documentação feita pelo Postman](https://documenter.getpostman.com/view/5196767/TVzRGdaq)

## Pré-Requisitos

 - Ter o node.js instalado
 - Ter o Git instalado
 - Ter um editor de texto para ver o código
 - Ter o Postman para fazer os testes da API ou software similar.

## Configurações
- Faça o clone do projeto:
```
git clone https://github.com/andrePereira11/autenticacaoJWT.git
```
- Entre na pasta do projeto
```
cd autenticacaoJWT
```

- Instale as dependencias
```
npm install
```

- Suba o servidor
```
node index.js
```


## Utilizando API_jwt
Testando as rotas

### GET localhost - get
```
localhost:3000/
```
Rota para acesso da Home da aplicação. 

### POST login - post
```
localhost:3000/login
```
Rota para pedir acesso ao Dashboard da aplicação. Por padrão, apenas será gerado o token com o usuário e senha abaixo. Por níveis de praticidade, foi colocado diretamente no código, porém em uma aplicação real, será analisado o login e senha verificando se há esse registro no banco de dados.

**Request Headers**

**Content-Type**          application/json
---
**Body** raw (json)
```
{
  "user": "Andre",
  "password": "123456"
}
```

### GET authentication - get
```
localhost:3000/dashboard
```
Make things easier for your teammates with a complete request description.

**Request Headers**

**Content-Type**           application/json
---
**x-access-token**         token gerado pela rota de login

## Tenologias utilizadas

> Node.js

> Express.js

> JWT
