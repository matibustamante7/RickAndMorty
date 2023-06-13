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
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"
type CardProps = {
    id: number;
    image: string;
    name: string;
    species: string;
    status: string;
}



export const CardComponent: React.FC<CardProps> = ({image, name, species, status, id}) => {
    
    const navigate = useNavigate();
    
    function handleDetail(){
        navigate(`/character/${id}`)
    }

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
                {/* <Typography sx={{ mt: 2 }}>id: {id}</Typography> */}
                <Typography sx={{ mt: 2 }}>Specie: {species}</Typography>
                <Typography sx={{ mt: 2 }}>Status: {status}</Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size='small' onClick={handleDetail}>Lean More</Button>
            </CardActions>
        </Card>
    )
}