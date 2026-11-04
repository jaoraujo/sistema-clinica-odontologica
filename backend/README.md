# Backend — Sistema Clínica Odontológica

## 1. Sobre o projeto

Backend do Sistema Clínica Odontológica, desenvolvido como atividade acadêmica da disciplina de Serviços Web.

O sistema tem como objetivo gerenciar pacientes, consultas e usuários de uma clínica odontológica, oferecendo uma API REST para comunicação com o frontend.

**Fase 1:** desenvolvimento do backend.

## 2. Tecnologias utilizadas

- Node.js — ambiente de execução JavaScript.
- Express.js — framework para construção da API REST.
- MongoDB Atlas — banco de dados em nuvem.
- Mongoose — biblioteca para integração com MongoDB.
- dotenv — gerenciamento de variáveis de ambiente.
- Git e GitHub — versionamento e colaboração.

## 3. Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js e npm.
- Git.
- Um editor de código, preferencialmente VS Code.

## 4. Instalação

Clone o repositório:

```bash
git clone https://github.com/jaoraujo/sistema-clinica-odontologica.git
```

Entre na pasta do backend:

```bash
cd sistema-clinica-odontologica/backend
```

Instale as dependências:

```bash
npm install
```

No Windows, caso o PowerShell bloqueie a execução do npm, utilize `npm.cmd` no lugar de `npm`.

## 5. Variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `backend/`, utilizando o `.env.example` como referência.

Variáveis necessárias:

- `PORT` — porta do servidor, por padrão 3000.
- `MONGODB_URI` — string de conexão com o MongoDB Atlas.
- `JWT_SECRET` — chave secreta utilizada na autenticação JWT, quando implementada.

**Atenção:** o arquivo `.env` contém informações privadas e não deve ser enviado ao GitHub.

Para obter acesso ao banco de desenvolvimento, entre em contato com o responsável pela configuração do MongoDB Atlas. O IP do computador também precisará estar autorizado no Atlas.

## 6. Executando o projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

Para iniciar normalmente:

```bash
npm start
```

Se a conexão estiver configurada corretamente, o terminal deverá apresentar:

```text
MongoDB conectado com sucesso!
Servidor rodando na porta 3000
```

O servidor será iniciado em:

`http://localhost:3000`

**Observação:** a API ainda está em desenvolvimento. Nem todas as rotas e funcionalidades estão disponíveis.

## 7. Estrutura do backend

```text
backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   ├── docs/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── .env.example
├── package.json
├── package-lock.json
└── README.md
```

### Responsabilidades das pastas

- `config/` — configurações e conexão com o banco.
- `controllers/` — lógica das operações da API.
- `docs/` — documentação Swagger/OpenAPI.
- `middlewares/` — autenticação, autorização e validações.
- `models/` — modelos de dados do MongoDB.
- `routes/` — definição dos endpoints.
- `app.js` — configuração da aplicação Express.
- `server.js` — inicialização do servidor.

## 8. Divisão de responsabilidades

| Integrante | Responsabilidade |
|---|---|
| Débora | Autenticação, usuários e controle de acesso |
| Thallyta | Gerenciamento de pacientes |
| Emmeline | Gerenciamento de consultas |
| João Araújo | Estrutura, MongoDB, integração, testes e Swagger |

## 9. Organização do desenvolvimento

Cada integrante deverá desenvolver suas funcionalidades em uma branch própria, evitando alterações diretas na branch `main`.

Fluxo recomendado:

1. Atualizar o repositório local.
2. Criar uma branch para a funcionalidade.
3. Desenvolver e testar as alterações.
4. Realizar commits com mensagens descritivas.
5. Enviar a branch ao GitHub.
6. Abrir um Pull Request para revisão e integração.

As funcionalidades devem seguir a estrutura de pastas existente, mantendo o código organizado.

## 10. Requisitos do projeto

- CRUD completo de pelo menos duas entidades relacionadas.
- Autenticação e autorização de usuários.
- Validação de dados no backend.
- Listagens com filtros e paginação no frontend.
- Documentação da API com Swagger/OpenAPI, acessível em `/docs`.
- Versionamento Git com participação de todos os integrantes.

**Status:** estrutura inicial do backend configurada. Funcionalidades, testes e documentação da API ainda serão desenvolvidos.
