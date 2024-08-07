import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FastfoodIcon from '@mui/icons-material/Fastfood';

export default function Header() {

    // const Logo = styled('img')({
    //     position: 'absolute',
    //     top: '0',
    //     left: '50%',
    //     transform: 'translateX(-50%)',
    //     width: '200px',
    //     height: '180px', // Defina a altura que deseja
    //     maxHeight: '500px', // Ajuste conforme necessário
    //     backgroundColor: "transparent"
    // });

    // const Typo = styled('Typography')({
    //     color: '#ffffff',
    //     fontSize: '16px',
    //     lineHeight: '36px',
    //     marginTop: 50,
    //     letterSpacing: '-0.02em',

    //     textDecoration: 'none',
    //     '&:hover': {
    //         color: '#e95353ce'
    //     }
    // })

    return (
        <Box height={140} backgroundColor="#373737" color="#ffffff">
            <Box display="flex" justifyContent="center" gap={10} alignItems="center">
                <a href="/catalog" style={{ textDecoration: 'none', color: "#fff", marginTop: 50 }}>
                    <Typography>Cardápio</Typography>
                </a>
                <a
                    href="https://api.whatsapp.com/send/?phone=554498019717&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0"
                    style={{ textDecoration: 'none', color: "#fff", marginTop: 50 }}
                >
                    <Typography>Whatsapp</Typography>
                </a>
                <Box sx={{ width: 237, height: 119 }}>
                    <img src="/logos/logo.png" width={237} height={119} />
                </Box>
                <a
                    href="https://www.google.com/maps/place/WR+Caf%C3%A9+Bar/@-23.4042313,-51.9719152,15z/data=!4m6!3m5!1s0x94ecd7c22dd0f785:0x15b6c4880cf18cbd!8m2!3d-23.4115606!4d-51.9553186!16s%2Fg%2F11vl9f_qxs?entry=tts"
                    style={{ textDecoration: 'none', color: "#fff", marginTop: 50 }}
                >
                    <Typography>Localização</Typography>
                </a>
                <Typography marginTop="50px">Contato</Typography>
            </Box>
        </Box>
    )
}