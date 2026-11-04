# Sistema — Clínica Odontológica

Projeto acadêmico desenvolvido para a disciplina de Serviços Web.

## Sobre o projeto

O Sistema — Clínica Odontológica tem como objetivo desenvolver uma aplicação web para gerenciamento de pacientes, consultas e usuários de uma clínica odontológica.

O sistema contará com autenticação, controle de acesso, cadastro de pacientes, agendamento de consultas e gerenciamento das informações da clínica.

## Tecnologias

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

**Frontend (fase posterior)**
- React

**Ferramentas**
- Git e GitHub
- Swagger/OpenAPI

## Integrantes e responsabilidades

| Integrante | Responsabilidade na Fase 1 |
|---|---|
| Débora | Autenticação, usuários e controle de acesso |
| Thallyta | Gerenciamento de pacientes |
| Emmeline | Gerenciamento de consultas |
| João Araújo | Estrutura, MongoDB, integração, testes e Swagger |

## Organização do projeto

A primeira fase está dedicada ao desenvolvimento do backend, utilizando Node.js, Express e MongoDB.

A estrutura inicial, o servidor Express e a conexão com o MongoDB Atlas já foram configurados.

O frontend será desenvolvido posteriormente com React.

## Como executar

As instruções de instalação, configuração das variáveis de ambiente e execução do servidor estão disponíveis no [README do backend](backend/README.md).

## Organização das branches

- `main` — versão principal do projeto.
- `feature/autenticacao` — Débora.
- `feature/pacientes` — Thallyta.
- `feature/consultas` — Emmeline.
- `feature/infraestrutura` — João Araújo.

Cada integrante deverá desenvolver sua funcionalidade na branch correspondente e utilizar Pull Requests para integrar as alterações à `main`.

## Status do projeto

**Fase 1 — Backend em desenvolvimento.**

A infraestrutura inicial está preparada. As funcionalidades de autenticação, pacientes, consultas e a documentação Swagger ainda serão implementadas.
