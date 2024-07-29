import { Box, Drawer, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function () {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpen = () => {
        console.log("carrinho aberto")
        setIsDrawerOpen(true)
    }

    const handleClose = () => {
        console.log("carrinho fechado")
        setIsDrawerOpen(false)
    }

    return (
        <>
            <IconButton onClick={handleOpen} aria-label="cart">
                <ShoppingCartIcon style={{ color: '#ffffff' }} />
            </IconButton>

            <Drawer anchor="right" open={isDrawerOpen} onClose={handleClose}>
                <Box sx={{ width: 300, padding: 2 }}>

                    <IconButton
                        onClick={handleClose}
                        color="primary"
                        aria-label="fechar carrinho"
                        sx={{ mb: 2 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography>
                        Items
                    </Typography>
                </Box>
            </Drawer>

        </>
    )
}