const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.token) {
        onLogin(response.data.token);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    );
  };