import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Link, makeStyles } from '@material-ui/core';
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



const Register = () => {


	const navigate = useNavigate();	
	
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

	   var flag=0;

	fetch('http://localhost:3001/api/user/register/v1',{
		method: 'POST',
		mode: 'cors',
		body: JSON.stringify({
			"username": event.target.username.value,
			"email": event.target.email.value,
			"password": event.target.password.value,
		}),

		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	}).then(response=> {
		if(response.status===500)
		{
			flag=1;
		}else
			alert("Registration Successfull!")
		return	response.json()
	})
	  .then(data=> {

		  if(flag){
			
			alert("Wrong Credentials : " + Object.keys(data.keyValue) + " \n Try Registering Again")
			console.log(data.keyValue);
		  }else{
			
			  console.log(data.token)
			  // Assuming `token` is your JWT received from the server
				
			  localStorage.setItem('prasthan_yatna_jwt', data.token);
			  navigate("/");
		  }

	  }).catch((error)=>{
		  
		console.log('Error in handle Submit: ', error);
	  });
  };

  return (
    <Grid container spacing={0} justify='center' direction='row'>
      <Grid item>
        <Paper variant='elevation' elevation={2} className={classes.paper}>
          <Typography component='h1' variant='h5'>
            Register
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} id='registrationForm'>
            <TextField
              label='Username'
              type='username'
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
              label='Email'
              type='email'
              className={classes.input}
              fullWidth
              name='email'
              variant='outlined'
              value={email}
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
            <TextField
              label='Confirm Password'
              type='password'
              className={classes.input}
              fullWidth
              name='confirmPassword'
              variant='outlined'
              value={confirmPassword}
              onChange={handleChange}
              required
            />
            <Button
              variant='contained'
              className={classes.submit}
              type='submit'
            >
              Register
            </Button>
          </form>
          <Link href='#' variant='body2'>
            Already have an account? Login
          </Link>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;
