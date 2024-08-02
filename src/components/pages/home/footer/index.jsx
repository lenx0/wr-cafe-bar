import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/system';
export default function Footer() {

    const SocialIcon = styled('a')({
        color: '#fff',
        margin: '0 10px',
        fontSize: '24px',
        textDecoration: 'none',
        '&:hover': {
            color: '#da5c5d',
        },
    });

    return (
        <Box sx={{
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
        }}>

            <Typography variant="body1">© 2024 wr-café-bar</Typography>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fa fa-facebook" aria-label="Facebook" />
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fa fa-instagram" aria-label="Instagram" />
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fa fa-twitter" aria-label="Twitter" />
            <Typography variant="body2" marginTop={2}>Contato: (00) 1234-5678 | email@barzinho.com</Typography>
        </Box>
    )
}