import React from 'react';
import { Box, AppBar, Toolbar, Container, Grid, Typography, Button, Stack, CardMedia } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export const NavBar: React.FC<{}> = () => {

    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='sticky'>
                <Toolbar>
                    <Container maxWidth='xl'>
                        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                            <Grid item>
                                <CardMedia
                                    component="img"
                                    height="100rem"
                                    alt='Rick and Morty'
                                    image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png'
                                />
                            </Grid>
                            <Grid item>
                                <Stack direction='row' spacing={2}>
                                    <Button variant='contained' onClick={() => navigate('login')}>Login</Button>
                                    <Button variant='outlined'>Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}