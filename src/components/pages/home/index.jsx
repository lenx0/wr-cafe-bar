import React from 'react';
import { Box, Button, Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const Banner = styled('img')({
    width: '100%',
    height: 'auto',
    maxHeight: '600px',
    objectFit: 'cover'
});

const Footer = styled('footer')({
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    marginTop: '40px',
    borderTop: '1px solid #444',
});

const SocialIcon = styled('a')({
    color: '#fff',
    margin: '0 10px',
    fontSize: '24px',
    textDecoration: 'none',
    '&:hover': {
        color: '#da5c5d',
    },
});

export default function Home() {
    return (
        <Box>
            <Banner src="/images/banner-home.jpeg" alt="Banner do Barzinho" />

            <Container>
                <Grid container spacing={3} justifyContent="center" marginTop={4}>
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

            <Footer>
                <Typography variant="body1">© 2024 wr-café-bar</Typography>
                <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fa fa-facebook" aria-label="Facebook" />
                <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fa fa-instagram" aria-label="Instagram" />
                <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fa fa-twitter" aria-label="Twitter" />
                <Typography variant="body2" marginTop={2}>Contato: (00) 1234-5678 | email@barzinho.com</Typography>
            </Footer>
        </Box>
    );
}
