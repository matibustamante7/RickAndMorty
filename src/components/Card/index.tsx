import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Divider
} from "@mui/material"
import React from "react"

type CardProps = {
    image: string;
    name: string;
    species: string;
    status: string;
}

export const CardComponent: React.FC<CardProps> = ({image, name, species, status}) => {
    return (
        <Card sx={{ maxWidth: '25rem' }}>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt={name}
            />
            <CardContent>
                {/* <Typography>Hola</Typography> */}
                <Typography variant="h5" sx={{ mb: 2 }}>{name}</Typography>
                <Divider />
                <Typography sx={{ mt: 2 }}>Specie: {species}</Typography>
                <Typography sx={{ mt: 2 }}>Status: {status}</Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size='small'>Lean More</Button>
            </CardActions>
        </Card>
    )
}