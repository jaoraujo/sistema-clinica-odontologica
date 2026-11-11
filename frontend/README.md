# Frontend — Sistema de Clínica Odontológica

## 📌 Sobre o Projeto

O frontend do **Sistema de Clínica Odontológica** é responsável pela interface web utilizada para gerenciar pacientes, consultas e usuários da clínica.

A aplicação será desenvolvida com **React**, utilizando **Vite** como ferramenta de desenvolvimento, com foco em organização, responsividade e facilidade de uso.

Este diretório contém exclusivamente o frontend do projeto.

## 📌 Objetivo e Público-Alvo

O sistema tem como objetivo facilitar o gerenciamento de uma clínica odontológica, reunindo informações de pacientes, consultas e usuários em um só lugar.

A aplicação é voltada para recepcionistas, dentistas e administradores de clínicas odontológicas, permitindo organizar agendamentos, consultar dados dos pacientes e acompanhar as atividades da clínica.

O projeto busca diminuir a necessidade de controles manuais e facilitar o acesso às informações no dia a dia.

## 🛠️ Tecnologias Utilizadas

- **React** — Desenvolvimento das interfaces e componentes.
- **Vite** — Ambiente de desenvolvimento e build.
- **JavaScript (JSX)** — Implementação dos componentes React.
- **CSS** — Estilização e responsividade.
- **React Router** — Navegação entre as páginas.
- **ESLint** — Análise estática do código.

## 📂 Estrutura do Projeto

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

### Organização das Pastas

- **assets/** — Imagens, ícones e recursos visuais.
- **components/** — Componentes reutilizáveis da interface.
- **contexts/** — Contextos e estados compartilhados.
- **pages/** — Páginas e telas da aplicação.
- **services/** — Serviços responsáveis pela comunicação com o backend.

## 👥 Divisão de Tarefas — Frontend

O desenvolvimento do frontend será dividido entre quatro integrantes, cada um responsável por um módulo específico.

### 1. Layout e Navegação — Thallyta

Responsável pela estrutura visual e navegação geral da aplicação.

**Atividades:**
- Desenvolvimento do header.
- Desenvolvimento da sidebar e menus.
- Criação do layout principal.
- Desenvolvimento de componentes visuais compartilhados.
- Configuração da navegação com React Router.
- Organização da estrutura visual e responsividade global.

### 2. Autenticação e Dashboard — João

Responsável pelas interfaces de acesso ao sistema e pelo painel principal.

**Atividades:**
- Desenvolvimento da tela de login.
- Desenvolvimento da tela de cadastro de usuários.
- Criação do dashboard.
- Exibição de informações resumidas no painel.
- Implementação das interações visuais dessas páginas.
- Estilização e responsividade das telas.

### 3. Gerenciamento de Pacientes — Débora

Responsável pelas interfaces de gerenciamento dos pacientes cadastrados.

**Atividades:**
- Desenvolvimento da tela de listagem de pacientes.
- Criação dos formulários de cadastro e edição.
- Implementação da interface de exclusão.
- Desenvolvimento da busca e dos filtros.
- Implementação da paginação.
- Estilização e responsividade das telas.

### 4. Gerenciamento de Consultas — Emmeline

Responsável pelas interfaces de gerenciamento e agendamento de consultas.

**Atividades:**
- Desenvolvimento da tela de listagem de consultas.
- Criação do formulário de agendamento.
- Desenvolvimento da interface de edição.
- Implementação dos filtros de consultas.
- Criação da visualização dos detalhes de uma consulta.
- Estilização e responsividade das telas.

## 🤝 Responsabilidades Compartilhadas

Todos os integrantes deverão:

- Desenvolver seus módulos utilizando React e JSX.
- Manter a organização dos componentes e arquivos.
- Seguir o padrão visual definido para o sistema.
- Garantir a responsividade das interfaces.
- Implementar validações e mensagens de erro na interface quando necessário.
- Integrar as funcionalidades de seu módulo com o backend conforme o andamento do projeto.
- Realizar testes das funcionalidades desenvolvidas.
- Registrar suas alterações por meio de commits no Git.

## 🚀 Como Executar o Frontend

### Pré-requisitos

- Node.js
- npm

### Instalação

Na pasta `frontend`, instale as dependências:

```bash
npm install
```

### Executar o ambiente de desenvolvimento

```bash
npm run dev
```

Após iniciar o servidor, acesse o endereço exibido no terminal, normalmente:

**http://localhost:5173/**

## 🌿 Organização do Desenvolvimento

O projeto utiliza Git e GitHub para versionamento.

Cada integrante deverá desenvolver suas funcionalidades em uma branch específica, mantendo seus commits organizados.

A branch `main` será utilizada para reunir as funcionalidades integradas e revisadas.

## 📌 Estado Atual

O ambiente inicial do frontend já está configurado com React, Vite e React Router.

A estrutura de pastas foi preparada para permitir o desenvolvimento dos módulos de forma organizada.

As páginas e funcionalidades do sistema serão implementadas ao longo do desenvolvimento do projeto.
