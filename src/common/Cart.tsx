import { Box, Divider, Drawer, IconButton, Stack, Typography } from "@mui/material"
import { boolean } from "yup";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useAppSelector } from "../redux/hooks";
import { HorizontalCardComponent } from "../components/HorizontalCard";

interface CartComponentProps {
    open: boolean;
    handleStateViewDrawer: () => void;
}

export const CartComponent: React.FC<CartComponentProps> = ({
    open,
    handleStateViewDrawer,
}) => {

    const items = useAppSelector((state) => state.cartReducer);


    return (
        <Drawer anchor={'right'} open={open}>
            <Box sx={{ width: '25em', p: 2 }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant="h5">Cart</Typography>
                    <IconButton color='primary'
                    onClick={() => handleStateViewDrawer()}>
                        <CloseRoundedIcon />
                    </IconButton>
                </Stack>
                <Divider sx={{ my: 1.5 }} />
                {
                    items.length > 0 ? items.map((item) => (
                        <HorizontalCardComponent
                            image={item.image}
                            name={item.name}
                            info={item.info}
                            id={item.id}
                        />
                    )) : 'No hay elementos en el carrito'
                }
            </Box>
        </Drawer>
    )
}