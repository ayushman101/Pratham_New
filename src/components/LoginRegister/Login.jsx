import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Link, Fade, makeStyles } from '@material-ui/core';
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.common.background,
  },
  form: {
    width: '300px',
    margin: 'auto',
  },
  input: {
    border: '1px solid #ccc',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  submit: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1, 2),
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {

  
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
	  const navigate= useNavigate();	
	  fetch('http://localhost:3001/api/user/login', {
		
		  method: 'POST',
		  mode: 'cors',
		  body: JSON.stringify({
			"email": event.target.username.value,
			"password": event.target.password.value,
		  }),
		  headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  }

	  }).then(response=> {
		  if(response.ok)
			  alert('Login Successfull')
		return response.json()
	  }).then(data=>{
		
		  if(data.token){
			localStorage.setItem('myData', JSON.stringify({
  				token: data.token
			}));
			  //const mydata= JSON.parse(localStorage.getItem('myData'));
			  //console.log(mydata.token)
			  

		  }
		  else
			  alert(data)

	  }).catch(error=>{
		console.log('Error in Login: ',error)
	  });
  };

  return (
    <Grid container spacing={0} justify='center' direction='row'>
      <Grid item>
        <Paper variant='elevation' elevation={2} className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Login in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              label='Email'
              type='email'
              className={classes.input}
              fullWidth
              name='username'
              variant='outlined'
              value={username}
              onChange={handleChange}
              required
              autoFocus
            />
            <TextField
              label='Password'
              type='password'
              className={classes.input}
              fullWidth
              name='password'
              variant='outlined'
              value={password}
              onChange={handleChange}
              required
            />
            <Button
              variant='contained'
              className={classes.submit}
              type='submit'
            >
              Submit
            </Button>
          </form>
          <Link href='#' variant='body2'>
            Forgot Password?
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
