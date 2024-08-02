import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FastfoodIcon from '@mui/icons-material/Fastfood';

export default function Header() {

    const Logo = styled('img')({
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200px',
        height: '180px', // Defina a altura que deseja
        maxHeight: '500px', // Ajuste conforme necessário
        backgroundColor: "transparent"
    });

    return (
        <Box height={230} display="flex" alignItems="center" width="100%" backgroundColor="#0f0f0f" paddingBottom={6} top={0} right={0}>
            <Container>
                <Grid container width="100%" spacing={2} justifyContent="center" marginTop={4}>
                    <Grid item xs={12} sm={6} md={2.4}>
                        <a href="https://api.whatsapp.com/send/?phone=554498019717&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0">
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#333', color: '#fff', '&:hover': {
                                        backgroundColor: '#da5c5d',
                                    },
                                }}
                                startIcon={<WhatsAppIcon />}
                            >
                                Whatsapp
                            </Button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.4}>
                        <Link to="/catalog">
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#333', color: '#fff', '&:hover': {
                                        backgroundColor: '#da5c5d',
                                    },
                                }}
                                startIcon={<MenuBookIcon />}
                            >
                                Cardápio
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.4}>

                        <a href="https://www.google.com/maps/place/WR+Caf%C3%A9+Bar/@-23.4117287,-51.9552946,15z/data=!4m2!3m1!1s0x0:0x15b6c4880cf18cbd?sa=X&ved=1t:2428&ictx=111">
                            <Logo src="/logos/logo-clean.png" />
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.4}>
                        <a href="https://www.google.com/maps/place/WR+Caf%C3%A9+Bar/@-23.4117287,-51.9552946,15z/data=!4m2!3m1!1s0x0:0x15b6c4880cf18cbd?sa=X&ved=1t:2428&ictx=111">
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: '#333', color: '#fff', '&:hover': {
                                        backgroundColor: '#da5c5d',
                                    },
                                }}
                                startIcon={<LocationOnIcon />}
                            >
                                Endereço
                            </Button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2.4}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                backgroundColor: '#333', color: '#fff', '&:hover': {
                                    backgroundColor: '#da5c5d',
                                },
                            }}
                            startIcon={<FastfoodIcon />}
                        >
                            Peça agora
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}