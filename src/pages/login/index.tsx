import React, {useState} from 'react';
import { Container, Grid, Paper, Box, Button, Typography, TextField } from '@mui/material';
import { useNotification } from '../../context/notification.contex';
import { LoginValidate } from '../../utils/validateForm';


type LoginType = {
  username:string,
  password:string,
}

export const LoginPage: React.FC<{}> = () => {
  const {getError, getSuccess} = useNotification()
  const [loginData, setLoginData] = useState<LoginType>({
    username:'',
    password:''
  });

  const dataLogin = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    LoginValidate.validate(loginData)
    .then(()=>{
      getSuccess(JSON.stringify(loginData));
    })
    .catch((error)=>{
      getError(error.message)
    })
    
  }

  return (
    <Container maxWidth='sm'>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        sx={{
          minHeight: '100vh'
        }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: '0.5em' }}>
            <Typography
              variant='h4'
              textAlign='center'
              sx={{ mt: 1, mb: 1 }}>
              Iniciar sesion
            </Typography>
            <Box component='form' onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name='username'
                margin='normal'
                label='Email'
                type='text'
                sx={{ mt: 2, mb: 1.5 }}
                // required 
                onChange={dataLogin}
                />
              <TextField
                fullWidth
                name='password'
                margin='normal'
                label='Password'
                type='password'
                sx={{ mt: 1.5, mb: 1.5 }}
                // required 
                onChange={dataLogin}
                />

              <Button 
              fullWidth 
              type='submit'
              variant='contained' 
              sx={{ mt: 1.5, mb: 2 }}>
                Iniciar sesion
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}