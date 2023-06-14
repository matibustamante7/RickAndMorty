import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Divider
} from "@mui/material"
import React, {useEffect, useState} from "react"
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cart.slice";
import { setItem } from "../../utils/localStorage";
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


    const itemExist = useAppSelector((state) => state.cartReducer);
    const [ disableBtn, setDisableBtn ] = useState<boolean>(false);

    useEffect(()=>{
        //pregunta si ya existe en el carrito el id y si existe desahibita el btn para no seguir agregandolo al carro
        itemExist.some((item)=> item.id === id)
        ? setDisableBtn(true)
        : setDisableBtn(false)
        setItem('cart', itemExist);
    },[itemExist, id])

    //add to cart
    const dispatch = useAppDispatch()

    function handleAddToCart(){
        dispatch(addToCart({id, name, image, info: status}))
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
                <Button fullWidth variant="outlined" size='small' onClick={handleDetail}>Lean More</Button>
                <Button fullWidth variant="contained" size='small' onClick={handleAddToCart} disabled={disableBtn}>Add to cart</Button>
            </CardActions>
        </Card>
    )
}