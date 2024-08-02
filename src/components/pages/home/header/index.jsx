import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FastfoodIcon from '@mui/icons-material/Fastfood';

export default function Header() {

    const Logo = styled('img')({
        width: '200px',
        height: '200px',
        maxHeight: '200px',
        marginTop: '40px'
    });

    return (
        <Box height={100} display="flex" alignItems="center" width="100%" backgroundColor="#1a1a1a" paddingBottom={6} position="fixed" top={0} right={0}>
            <Box>
                <Logo src="/logos/logo-clean.png" alt="Logo" />
            </Box>
            <Container>
                <Grid container width="100%" spacing={3} justifyContent="center" marginTop={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <a href="https://api.whatsapp.com/send/?phone=554498019717&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0">
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ backgroundColor: '#333', color: '#fff' }}
                                startIcon={<WhatsAppIcon />}
                            >
                                Whatsapp
                            </Button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Link to="/catalog">
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ backgroundColor: '#333', color: '#fff' }}
                                startIcon={<MenuBookIcon />}
                            >
                                Cardápio
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <a href="https://www.google.com/maps/place/WR+Caf%C3%A9+Bar/@-23.4117287,-51.9552946,15z/data=!4m2!3m1!1s0x0:0x15b6c4880cf18cbd?sa=X&ved=1t:2428&ictx=111">
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ backgroundColor: '#333', color: '#fff' }}
                                startIcon={<LocationOnIcon />}
                            >
                                Endereço
                            </Button>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ backgroundColor: '#333', color: '#fff' }}
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