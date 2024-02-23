import { useEffect, useState } from 'react';
import useApi from '../../services/useApi';
import { useNavigate } from 'react-router-dom';

export interface LoginProps {
  name: string;
  login: string;
  password: string;
  role: string;
}

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Lógica de autenticação (pode variar dependendo da implementação)
    // Aqui você pode usar um serviço de autenticação, verificar contra um banco de dados, etc.

    // Adicione sua lógica de autenticação aqui
    
    try {
      const api = useApi();
      api.signin(login, password);
      console.log(`O usuario ${login} foi autenticado com sucesso!`)
      navigate('/dashboard');
    }catch (error) {
      console.log(error);
    }


    // Redirecionar ou atualizar o estado de autenticação se necessário
  };

  return (
    <div className="login-container col-md-10 mx-auto col-lg-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        <div className='form-floating mb-3'>        
          <input
            type="text"
            className='form-control'
            id='login'
            placeholder='Login'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <label htmlFor="login">login</label>
          </div>
        <div className='form-floating mb-3'>        
          <input
            type="password"
            className='form-control'
            id='password'
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Senha</label>
          </div>
        <button type="submit" className='w-100 btn btn-lg btn-primary'>Login</button>
      </form>
    </div>

        // <div className="col-md-10 mx-auto col-lg-5">
        //   <form onSubmit={handleLogin} className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        //     <div className="form-floating mb-3">
        //       <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com"></input>
        //       <label htmlFor="floatingInput">Email address</label>
        //     </div>
        //     <div className="form-floating mb-3">
        //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password"></input>
        //       <label htmlFor="floatingPassword">Password</label>
        //     </div>
        //     <div className="checkbox mb-3">
        //         <input type="checkbox" value="remember-me"> Remember me</input>
        //     </div>
        //     <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        //   </form>
        // </div>

  );
};

export default Login;
