import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import './Signup.css'
// import { Navigate } from 'react-router-dom';
export default function FormPropsTextFields(props) {
  const setLogin = props.setLogin;
  const [firstname, setFirstName] = React.useState("")
  const [lastname, setLastName] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [mobile, setMobile] = React.useState("")
  const [email, setEmail] = React.useState("")
 
  const handleSubmit = () => {
    const handlePost = async () => {
      await axios.post("http://localhost:9000/users_data", {
        firstname:firstname, lastname:lastname,password: password,mobile: mobile,email: email
      })
        .then((res) => {
          console.log(res);
          alert("successfully created an account...please try to login")
          setLogin(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    handlePost();
  }
  return (
    <Box
      className='signup-form'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div className='signup-title'><Typography variant='h5'>SIGN UP</Typography></div>
        <div>
          <TextField
            id="outlined-password-input"
            label="First Name"
            type="username"
            autoComplete="current-password"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Last Name"
            type="username"
            autoComplete="current-password"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Mobile No"
            type="phone-number"
            autoComplete="current-password"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <TextField
          id="address"
          label="E-mail address"
          type="email"
          autoComplete="current-password"
          style={{ width: "96.7%" }}
          onChange={(e) => setEmail(e.target.value)}
        />

      </div>

      <div className='button-signup'>
        <Button variant="contained" onClick={handleSubmit} >Sign Up</Button>
      </div>
      <span className='text-signup'>Already have an Account?<button className='alter-login ' onClick={() => setLogin(true)}>Login</button></span>

    </Box>
  );
}


