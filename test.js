const axios = require('axios');

const API_URL = 'http://localhost:3000';
let token = '';

async function testRoutes() {
  try {
    // Primeiro, registrar um usuário
    console.log('Registrando usuário...');
    await axios.post(`${API_URL}/auth/register`, {
      username: 'testuser',
      password: 'testpass'
    });
    console.log('Usuário registrado com sucesso');

    // Fazer login para obter o token
    console.log('\nFazendo login...');
    const loginResponse = await axios.post(`${API_URL}/auth/login`, {
      username: 'testuser',
      password: 'testpass'
    });
    token = loginResponse.data.token;
    console.log('Login realizado com sucesso');

    // Configurar o header de autorização
    const config = {
      headers: {
        Authorization: token
      }
    };

    // Teste da rota de carros
    console.log('\nTestando rota /cars...');
    const carsResponse = await axios.get(`${API_URL}/cars`, config);
    console.log('Resposta de /cars:', carsResponse.data);

    // Teste da rota de dashboard
    console.log('\nTestando rota /dashboard/stats...');
    const dashboardResponse = await axios.get(`${API_URL}/dashboard/stats`, config);
    console.log('Resposta de /dashboard/stats:', dashboardResponse.data);

  } catch (error) {
    console.error('Erro nos testes:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Dados:', error.response.data);
    }
  }
}

testRoutes(); 