# Car Manager API ( baguncinha)

Sistema de gerenciamento de frota de veículos desenvolvido com Node.js, Express e MongoDB. Este sistema permite o controle completo de uma frota de veículos, incluindo gestão de usuários, veículos, viagens e manutenções.

## 🚀 Funcionalidades

- **Gestão de Usuários**
  - Registro e autenticação de usuários
  - Diferentes níveis de acesso (admin/user)
  - Sistema de login com JWT (JSON Web Tokens)

- **Gestão de Veículos**
  - Cadastro de carros com informações detalhadas
  - Controle de quilometragem
  - Status do veículo (disponível, em uso, manutenção)
  - Localização atual

- **Gestão de Viagens**
  - Registro de início e fim de viagens
  - Controle de quilometragem por viagem
  - Registro de destino e local de estacionamento
  - Status da viagem (ativa, concluída, cancelada)

- **Dashboard**
  - Estatísticas gerais da frota
  - Total de carros
  - Viagens ativas
  - Manutenções
  - Quilometragem total

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Socket.IO
- JWT Authentication
- Mongoose
- Cors
- Dotenv

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB (versão 4.4 ou superior)
- NPM ou Yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd car-manager
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Copie o conteúdo abaixo e ajuste conforme necessário:
```env
MONGODB_URI=mongodb://localhost:27017/carManager
JWT_SECRET=segredo-seguro
PORT=3000
```

4. Inicie o MongoDB:
   - Certifique-se de que o MongoDB está instalado e rodando
   - Para Windows, inicie o MongoDB Compass ou execute:
```bash
mongod
```

5. Inicie o servidor:
```bash
npm start
# ou
node server.js
```

## 📁 Estrutura do Projeto

```
car-manager/
├── config/
│   └── database.js      # Configuração do MongoDB
├── models/
│   ├── User.js         # Modelo de usuário
│   ├── Car.js          # Modelo de carro
│   ├── Trip.js         # Modelo de viagem
│   └── Maintenance.js  # Modelo de manutenção
├── routes/
│   ├── auth.js         # Rotas de autenticação
│   ├── cars.js         # Rotas de carros
│   └── dashboard.js    # Rotas do dashboard
├── middleware/
│   └── auth.js         # Middleware de autenticação
├── .env                # Variáveis de ambiente
├── package.json        # Dependências e scripts
└── server.js          # Arquivo principal
```

## 🔌 Endpoints da API

### Autenticação
- `POST /auth/register` - Registrar novo usuário
  ```json
  {
    "username": "usuario",
    "password": "senha"
  }
  ```
- `POST /auth/login` - Fazer login
  ```json
  {
    "username": "usuario",
    "password": "senha"
  }
  ```

### Carros
- `GET /cars` - Listar carros (com paginação)
  - Query params: `page`, `limit`
- `POST /cars` - Adicionar novo carro
  ```json
  {
    "licensePlate": "ABC1234",
    "color": "Preto",
    "brand": "Toyota",
    "year": 2020
  }
  ```
- `GET /cars/:id` - Buscar carro específico
- `PUT /cars/:id` - Atualizar carro
- `DELETE /cars/:id` - Remover carro

### Dashboard
- `GET /dashboard/stats` - Obter estatísticas gerais

## 🔒 Segurança

- Todas as rotas (exceto login/registro) requerem autenticação
- Senhas são hasheadas antes de serem salvas
- Tokens JWT são usados para autenticação
- CORS está configurado para permitir requisições de qualquer origem

## 🧪 Testes

Para executar os testes:
```bash
npm test
# ou
node test.js
```

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor
- `npm test` - Executa os testes
- `npm run dev` - Inicia o servidor em modo desenvolvimento (com nodemon)

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- Seu Nome - [371544jm@gmail.com](mailto:371544jm@gmail.com)

## 🙏 Agradecimentos

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Socket.IO](https://socket.io/) 
