import React, { useState } from "react";
import axios from 'axios';
import {Box, TextField, Button} from "@mui/material";
import {purple} from '@mui/material/colors';
import './LoginPage.css';

const purple_button = purple[100];
const purple_hover = purple[300];


const handleLogin = ( {email, password} ) => {
  const userData = {
    email: email,
    password: password,
  };
  axios.post('http://localhost:3000/api/v1/api-keys', userData)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
};


function LoginPage(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
      <Box
        sx={{
          width: 600,
          height: 540,
          backgroundColor: 'white',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginTop: '100px'
        }}
      >
        <div style = {{justifyContent: 'center'}}>
            <div>
                <h1 className={"LoginTitle"}>Login</h1>
            </div>
            <div style = {{marginTop: '10px'}}>
                <TextField id="outlined-basic" label="email" variant="outlined" sx = {{ width: '50ch'}} color="secondary" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <TextField id="outlined-basic" label="password" variant="outlined" sx = {{ width: '50ch', marginTop: '20px'}} color="secondary" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div style = {{textAlign: 'center'}}>
                <Button variant="contained" sx = {{marginTop: '20px', backgroundColor: purple_button, "&:hover":{backgroundColor: purple_hover}}}
                onClick={() => handleLogin(email, password)}>
                  Login
                </Button>
            </div>
        </div>
      </Box>
  );
}

export default LoginPage;