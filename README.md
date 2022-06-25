
# API DA LOJA M. STORE

Projeto desenvolvido do zero, veja o projeto completo <a href="">clicando aqui</a>. api para cadastrar produtos da loja, deletar, modificar e listar. 


## Documentação da API


- [Rotas de usuario](#user)
- [Rotas de administrador](#admin)
- [Como usar](#howuse)


<a id="user"></a>

#### Criar Usuário

```http
  POST /register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `registerUser` | `string` | **Obrigatório** |
| `registerEmail` | `string` | **Obrigatório** |
| `registerPassword` | `string` | **Obrigatório** |

#### Retorna uma mensagem de sucesso.

---

#### Entrar 

```
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório** |
| `password` | `string` | **Obrigatório** |

 Retorna dados do usuário **{ name: String,  admin: Boolean, token: String }**

---

#### Lista de produtos 

```http
  GET /products
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `_id` | `string` |  **id do produto** |
| `name` | `string` | **Nome do produto** |
| `price` | `Number` | **Preço do produto** |
| `category` | `string` | **Categoria do produto** |
| `about` | `string` | **Sobre o produto** |
| `offer` | `Number` | **oferta do produto** |
| `image` | `string` | **Url da Imagem** |


**Retorna a lista de produtos**

---

#### Lista de categorias 

```http
  GET /categories
```
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `_id` | `string` |  **id do produto** |
| `category` | `string` |  **Nome da categoria** |

**Retorna a lista de categorias**

---

#### Mudar a senha 

```http
  PUT /password
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Bearer` | `string` |  Header **Authorization** |
| `oldPassword` | `string` | **Obrigatório** |
| `newPassword` | `string` | **Obrigatório** |

 Retorna mensagem de sucesso 

---


<a id="admin"></a>
## Rotas administrador 

#### Adicionar Produto

```http
  POST /password
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `String` |  **Obrigatório** |
| `price` | `Number` | **Obrigatório** |
| `category` | `String` | **Obrigatório** |
| `about` | `String` | **Obrigatório** |
| `offer` | `Number` | **Obrigatório** |
| `image` | `String` | **Obrigatório** |


 Retorna mensagem de sucesso 

---

#### Adicionar Categoria

```http
  POST /category
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `category` | `String` |  **Obrigatório** |

 Retorna mensagem de sucesso 

---


#### Remover Produto

```http
  DELETE /product/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `:id` | `String` |  id do produto  **Obrigatório** |

**exemplo http://meudominio.com/product/id_do_produto**

 Retorna mensagem de sucesso 

---


<a id="howuse"></a>
# Uso/Instalações

instalações necessarias: 

* <a href="https://nodejs.org/en/">Nodejs</a>
* Baixe o projeto, descompacte abra a pasta e execute o comando ``` npm install``` para baixar as dependecias do projeto.
* Execute o comando ```npm run createAdmin``` para criar o usuario administrador.
* Execute o comando ```npm run project``` para executar a API


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`BCRYPT_SALT` _valor para o bcrypt_

`PORT` _Porta para sua aplicação funcionar ou então ela usará a porta_ **3003**

`JWT_SECRET` _senha para o JWT assinar o token de autenticação._
