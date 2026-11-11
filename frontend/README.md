# Frontend — Sistema de Clínica Odontológica

## 📌 Sobre o Projeto

O Sistema de Clínica Odontológica é uma aplicação web desenvolvida para facilitar o gerenciamento de pacientes, consultas e usuários de uma clínica odontológica.

O objetivo é reunir essas informações em um só lugar, facilitando o trabalho dos funcionários e diminuindo a necessidade de controles manuais.

O sistema é voltado para recepcionistas, dentistas e administradores de clínicas odontológicas, que poderão consultar informações, organizar agendamentos e acompanhar as atividades da clínica.

Nesta fase do projeto, foi desenvolvido o frontend utilizando React, com dados simulados para demonstrar o funcionamento das interfaces.

## 🛠️ Tecnologias Utilizadas

- **React** — Desenvolvimento das interfaces e componentes.
- **Vite** — Ambiente de desenvolvimento.
- **JavaScript (JSX)** — Implementação dos componentes.
- **CSS** — Estilização e responsividade.
- **React Router** — Navegação entre as páginas.
- **ESLint** — Análise estática do código.

## 👥 Integrantes e Responsabilidades

O frontend foi dividido entre quatro integrantes.

| Integrante | E-mail | Responsabilidade |
|---|---|---|
| Thallyta | thallyta.freire@maisunifacisa.com.br | Layout e navegação |
| João Araújo | joao.vicctor@maisunifacisa.com.br | Login, cadastro, dashboard e usuários |
| Débora | debora.goncalo@maisunifacisa.com.br | Gerenciamento de pacientes |
| Emmeline | alexandra.roma@maisunifacisa.com.br | Gerenciamento de consultas |

### Layout e Navegação — Thallyta

Responsável pela estrutura visual geral da aplicação, incluindo header, sidebar, menus, componentes compartilhados e organização do layout.

### Autenticação, Dashboard e Usuários — João

Responsável pelas telas de login, cadastro, dashboard e gerenciamento de usuários, incluindo a autenticação simulada e o controle de acesso às páginas.

### Gerenciamento de Pacientes — Débora

Responsável pelas interfaces de listagem, busca, filtros, cadastro, edição e exclusão de pacientes.

### Gerenciamento de Consultas — Emmeline

Responsável pelas interfaces de listagem, agendamento, edição e gerenciamento de consultas, incluindo os filtros de data e status.

## 📋 Modelagem de Dados

O sistema trabalha com três entidades principais: Usuários, Pacientes e Consultas.

### Usuários

Representam as pessoas que utilizam o sistema.

**Atributos:**
- Identificador
- Nome
- E-mail
- Senha
- Perfil de acesso
- Status

Os perfis previstos são administrador, recepcionista e dentista.

### Pacientes

Armazenam as informações dos pacientes cadastrados na clínica.

**Atributos:**
- Identificador
- Nome
- CPF
- Telefone
- E-mail
- Data de nascimento

### Consultas

Representam os agendamentos realizados na clínica.

**Atributos:**
- Identificador
- Paciente
- Data
- Horário
- Motivo
- Status da consulta

### Relacionamentos

A principal relação do sistema ocorre entre Pacientes e Consultas.

**Paciente (1) — (N) Consulta**

Um paciente pode possuir várias consultas, mas cada consulta está associada a apenas um paciente.

Os usuários são responsáveis por acessar e gerenciar as informações da clínica conforme suas permissões.

### Regras de Negócio

- Para agendar uma consulta, o paciente deve estar cadastrado.
- Cada consulta deve estar vinculada a um paciente.
- Os dados obrigatórios devem ser preenchidos nos formulários.
- O e-mail dos usuários deve possuir um formato válido.
- O gerenciamento de usuários é reservado aos administradores.
- As consultas podem possuir status como agendada, concluída ou cancelada.
- Antes de excluir registros, o sistema deve solicitar uma confirmação.

## 🧭 Rotas da Aplicação

A navegação é realizada utilizando React Router, permitindo acessar as páginas sem recarregar o site.

| Rota | Funcionalidade |
|---|---|
| `/` | Redirecionamento para Login ou Dashboard |
| `/login` | Tela de login |
| `/cadastro` | Tela de cadastro |
| `/dashboard` | Painel principal da clínica |
| `/pacientes` | Gerenciamento de pacientes |
| `/consultas` | Gerenciamento de consultas |
| `/usuarios` | Gerenciamento de usuários |

Os formulários de cadastro e edição de pacientes e consultas são acessados pelas respectivas interfaces de gerenciamento.

### Controle de Acesso

As páginas internas utilizam uma autenticação simulada nesta primeira fase.

Quando o usuário não está logado, ele é redirecionado para `/login`.

Após realizar o login, o usuário pode acessar o Dashboard e as demais páginas conforme seu perfil.

A página de gerenciamento de usuários é reservada aos administradores.

A autenticação definitiva será realizada posteriormente, com a integração ao backend.

## 🖥️ Telas e Protótipos

As principais interfaces foram desenvolvidas em React, seguindo um padrão visual para manter a navegação organizada e facilitar o uso do sistema.

### Login e Cadastro

A tela de login permite informar e-mail e senha para acessar o sistema.

A tela de cadastro possui os campos necessários para registrar usuários na demonstração.

Os formulários apresentam validações para orientar o preenchimento das informações.

### Dashboard

O Dashboard apresenta um resumo das informações da clínica, incluindo indicadores de pacientes e consultas.

Também permite acessar as demais funcionalidades pelo menu de navegação.

### Gerenciamento de Pacientes

A interface de pacientes permite visualizar os registros cadastrados, realizar buscas, utilizar filtros e acessar as opções de cadastro, edição e exclusão.

### Gerenciamento de Consultas

A interface de consultas permite visualizar agendamentos, aplicar filtros e acessar as opções de criação e edição de consultas.

### Gerenciamento de Usuários

A interface de usuários permite visualizar e administrar as contas do sistema, respeitando o perfil de acesso do usuário logado.

### Protótipos Visuais

As próprias interfaces desenvolvidas em React representam os protótipos funcionais desta fase.

As telas podem ser visualizadas executando o projeto localmente, conforme as instruções abaixo.

As capturas de tela também poderão ser adicionadas ao repositório para facilitar a visualização das interfaces.

## ⚠️ Validações e Estados da Interface

### Validação dos Formulários

Os formulários devem verificar se os campos obrigatórios foram preenchidos corretamente.

Entre as validações previstas estão:

- Campos obrigatórios não preenchidos.
- E-mail com formato inválido.
- Informações incorretas ou incompletas.
- Tentativa de cadastrar informações duplicadas, quando aplicável.

Quando houver algum problema, a interface deve apresentar uma mensagem próxima ao campo correspondente, orientando o usuário sobre a correção necessária.

### Estado de Carregamento (Loading)

Durante operações que dependam de processamento ou comunicação com a API, a interface deverá apresentar um indicador de carregamento.

Os botões envolvidos também deverão ser desabilitados temporariamente para evitar envios repetidos.

### Erros de Comunicação com a API

Quando ocorrer uma falha de comunicação, a interface deverá informar o problema ao usuário e oferecer a possibilidade de tentar novamente.

Os comportamentos previstos incluem:

- **Erro 401:** redirecionamento para o Login.
- **Erro 403:** mensagem de acesso negado.
- **Erro de conexão:** mensagem informando a falha e opção de nova tentativa.

Esses comportamentos serão utilizados na integração com a API nas próximas etapas.

### Listas Vazias

Quando não houver registros para exibir, o sistema deverá apresentar uma mensagem como "Nenhum registro encontrado".

### Exclusão de Registros

Antes de excluir um paciente, consulta ou usuário, a interface deverá solicitar confirmação para evitar exclusões acidentais.

### Dados Simulados

Nesta fase, o frontend utiliza dados simulados para demonstrar as funcionalidades sem depender de uma conexão com o backend.

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
- **components/** — Componentes reutilizáveis.
- **contexts/** — Contextos e estados compartilhados.
- **pages/** — Páginas da aplicação.
- **services/** — Serviços destinados à comunicação com o backend.

## 🚀 Como Executar o Frontend

### Pré-requisitos

- Node.js
- npm

### Instalação

Abra o terminal na pasta `frontend` e instale as dependências:

```bash
npm install
```

### Executar o projeto

```bash
npm run dev
```

Após iniciar o servidor, acesse o endereço exibido no terminal, normalmente:

**http://localhost:5173/**

## 🌿 Organização do Desenvolvimento

O projeto utiliza Git e GitHub para versionamento.

Cada integrante desenvolve suas funcionalidades em uma branch específica.

As alterações são integradas à branch `main` por meio de Pull Requests.

## 📌 Estado Atual

O frontend foi desenvolvido utilizando React, Vite e React Router.

As interfaces principais de Login, Cadastro, Dashboard, Pacientes, Consultas e Usuários foram adicionadas ao projeto.

A aplicação utiliza dados simulados para demonstrar as funcionalidades e a navegação entre as páginas.

A integração com o backend e a comunicação real com a API ficam para as próximas etapas do desenvolvimento.
