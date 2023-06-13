import React, { useEffect, useState } from 'react';
import { Container, Button, CircularProgress, Typography, Divider, Pagination, Stack } from '@mui/material';
import { HeaderComponent } from '../../components/Header/index';
import { characters } from '../../api/characters';
import { CardComponent } from '../../components';
import { TypeCharacter } from './interface/character.interface';
import { Grid, Box } from "@mui/material"

export const HomePage: React.FC<{}> = () => {
  //pagination
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    characters.getAll({ page }).then((r) => {
      setCount(r.data.info.pages)
      setAllCharacters(r.data.results)
      setTimeout(() => setLoading(false), 1000);
    }).catch((e) => {
      console.error(e);
    })
  }, [page])

  return (
    <Container maxWidth='xl'>
      <Typography variant='h3' textAlign='center'>Rick and Morty</Typography>
      <Divider />
      {
        loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <div>
              {
                allCharacters?.length !== 0 ? (
                  <Grid sx={{ my: 2 }} container spacing={3} direction='row'>
                    {allCharacters?.map((character) => (
                      <Grid item xs={4}>
                        <CardComponent
                          key={character.id}
                          image={character.image}
                          name={character.name}
                          species={character.species}
                          status={character.status}
                        />
                      </Grid>
                    ))}
                  </Grid>
                ) : ''
              }
            </div>
            <Stack alignItems='center'>
              <Pagination color='primary'
                sx={{ m: 3 }}
                count={count}
                page={page}
                onChange={handlePageChange} />
            </Stack>
          </>

        )
      }

    </Container>
  )
}