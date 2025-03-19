const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const connectDB = require('./config/database');
const carRoutes = require('./routes/cars');
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados
connectDB();

// Rotas
app.use('/auth', authRoutes);
app.use('/cars', carRoutes);
app.use('/dashboard', dashboardRoutes);

// Iniciar servidor
server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
