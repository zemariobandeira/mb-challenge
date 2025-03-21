# MB CHALLENGE

Este projeto utiliza **Vue.js 3** com **Vite** no frontend e **Express.js** no backend. Ele é parte de um desafio técnico e ficará disponível aqui no Github por tempo limitado.

## 📂 Estrutura do Projeto

```
projeto/
│-- frontend/    # Código-fonte do Vue.js
│   ├── src/     # Componentes e páginas
│   ├── public/  # Arquivos estáticos
│   ├── tests/   # Testes unitários com Vitest
│   └── vite.config.js  # Configuração do Vite
│
│-- backend/     # Código-fonte do Express.js
│   ├── CompanyAccount.js   # Responsável pelo cadastro de pessoa jurídica
│   ├── PersonalAccount.js  # Responsável pelo cadastro de pessoa física
│   └── server.js  # Inicialização do servidor
│
│-- package.json  # Dependências do projeto
│-- README.md  # Documentação
```

## 🚀 Instalação e Execução

### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/zemariobandeira/mb-challenge
cd mb-challenge
```

### 2️⃣ Instalar dependências
```sh
npm install
```

### 3️⃣ Rodar a aplicação (Modo DEV)
#### 📌 Iniciar o backend
```sh
npm run dev:server  # Usa nodemon para desenvolvimento
```

#### 📌 Iniciar o frontend
```sh
npm run dev:client  # Inicia o Vite
```

Acesse a aplicação no navegador: **http://localhost:5173**

### 3️⃣ Rodar a aplicação (Modo PROD)
#### 📌 Fazer build antes
```sh
npm run build  # A build será construída em /dist
```

#### 📌 Servir a aplicação com ExpressJS
```sh
npm run serve  # Inicia o ExpressJS
```

Acesse a aplicação no navegador: **http://localhost:3000/registration**

## 🧪 Testes Unitários com Vitest

O projeto utiliza **Vitest** e **Vue Test Utils** para testes unitários.

### ✅ Rodar os testes
```sh
npm run test
```

Isso permite que os testes sejam executados automaticamente quando os arquivos forem alterados.

## 🎯 Tecnologias Utilizadas
- **Vue.js 3** (com Composition API)
- **Vite** (build tool para Vue)
- **Express.js** (servidor backend)
- **Vitest** (testes unitários)
- **Vue Test Utils** (testes de componentes Vue)
