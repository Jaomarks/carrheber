const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Rota de login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const token = jwt.sign({ userId: user._id }, 'segredo-seguro');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

// Rota de registro (apenas para teste)
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
      username,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

module.exports = router; 