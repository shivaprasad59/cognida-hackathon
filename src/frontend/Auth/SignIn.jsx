import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm(props) {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://localhost:9000/users_data');
      const user = response.data.find((user) => user.email === username && user.password === password);

      if (user) {
        alert('User credentials found');
        localStorage.setItem('loggedUser', JSON.stringify(user));
        navigate('/Home');
      } else {
        alert('Wrong Credentials');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      className='login-form'
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <div className='login-title'>
          <Typography variant='h5'>LOGIN</Typography>
        </div>
        <div>
          <TextField
            style={{ width: '90%' }}
            id='outlined-username-input'
            label='User Name'
            type='username'
            autoComplete='current-username'
            className='login-username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <TextField
            style={{ width: '90%' }}
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className='button-login'>
        <Button variant='contained' onClick={handleSubmit}>
          Login
        </Button>
      </div>
      <span className='text-login'>
        Create an Account<button className='alter-login' onClick={() => props.setLogin(false)}>Sign Up</button>
      </span>
    </Box>
  );
}
