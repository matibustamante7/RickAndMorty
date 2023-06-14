import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ICharacter } from "./interfaces/character.interface";
import { characters } from "../../api/characters";
import { useState } from "react";
import { Box, Container, Divider, Grid, Typography, Chip, Button } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material";

export const CharacterDetail: React.FC = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [character, setCharacter] = useState<ICharacter | null>();
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setLoading(true)
        characters
            .getById({ id })
            .then((r) => {
                setCharacter(r.data)
                setLoading(false)
            })
            .catch((e) => console.error(e))
    }, [])
    
    function handleBack(){
        navigate('/');
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Container maxWidth='xl'>
                {
                    loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <CircularProgress />
                        </Box>
                    ) : (
                        <Grid
                            sx={{ mt:10 }}
                            container
                            columnSpacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="h2">{character!.name}</Typography>
                                <Divider />
                                <Typography variant="h6">Gender: {character!.gender}</Typography>
                                <Typography variant="h6">Status: 
                                    {
                                        character?.status==='Alive' ? (
                                            <Chip color='primary' variant='outlined' label={character?.status}/>
                                        ) : character?.status==='Dead' ? (
                                            <Chip color='secondary' variant='outlined' label={character?.status}/>
                                        ) : (
                                            <Chip sx={{color:'blue'}} variant='outlined' label={character?.status}/>
                                        )
                                    }
                                    
                                </Typography>
                                <Typography variant="h6">Location: {character!.location.name}</Typography>
                                <Typography variant="h6">Origin: {character!.origin.name}</Typography>
                                <Button sx={{mt:5, width:'10rem'}} variant="contained" onClick={handleBack}
                                >Back</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <img
                                    src={character!.image}
                                    style={{ height: '100%', width:'60%', borderRadius: '0.5em' }}
                                />
                            </Grid>
                            
                        </Grid>
                        
                    )}
            </Container>
        </Box>
    )
}