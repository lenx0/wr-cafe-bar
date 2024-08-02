import { Stack, Typography } from "@mui/material";
import { styled } from '@mui/system';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
        <Stack sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#0f0f0f',
            color: '#fff',
            padding: '20px',
            textAlign: 'center',
            marginTop: '40px',
            borderTop: '1px solid #444',
        }}>
            <Stack>
                <Typography variant="body2" marginTop={2}>Siga nas redes sociais</Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" marginTop={1.2}>
                <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fab fa-facebook" aria-label="Facebook" />
                <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fab fa-instagram" aria-label="Instagram" />
                <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fab fa-twitter" aria-label="Twitter" />
            </Stack>
            <Stack>
                <Typography variant="body2" marginTop={2}>Contato: (00) 1234-5678 | email@barzinho.com</Typography>
            </Stack>
            <Stack>
                <Typography variant="body1">© 2024 Todos os direitos reservados</Typography>
            </Stack>
        </Stack>
    )
}