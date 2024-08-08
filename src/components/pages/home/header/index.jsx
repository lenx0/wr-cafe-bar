import { Box, Typography } from "@mui/material";


export default function Header({ scrollToSection }) {

    const hoverEffect = {
        position: 'relative',
        '&:hover::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            bottom: '-4px',
            left: '0',
            backgroundColor: '#1b1b1bdf',
            visibility: 'visible',
            transform: 'scaleX(1)',
            transition: 'all 0.3s ease-in-out',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '2px',
            bottom: '-4px',
            left: '0',
            backgroundColor: '#1b1b1bdf',
            visibility: 'hidden',
            transform: 'scaleX(0)',
            transition: 'all 0.3s ease-in-out',
        },
    };

    return (
        <Box backgroundColor="#ffffff">
            <Box display="flex" mt={2} ml={5} gap={10} alignItems="center" color="#1b1b1bdf">
                <img src="/logos/logo.png" width={200} height={100} />

                <a style={{ cursor: 'pointer', textDecoration: 'none', color: "#1b1b1bdf" }} onClick={() => scrollToSection("catalog")}>
                    <Typography fontSize={18} sx={hoverEffect}>Cardápio</Typography>
                </a>

                <a style={{ cursor: 'pointer', textDecoration: 'none', color: "#1b1b1bdf" }} href="https://api.whatsapp.com/send/?phone=554498019717&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <Typography fontSize={18} sx={hoverEffect}>Whatsapp</Typography>
                </a>

                <a style={{ cursor: 'pointer', textDecoration: 'none', color: "#1b1b1bdf" }} onClick={() => scrollToSection("map")}>
                    <Typography fontSize={18} sx={hoverEffect}>Localizaçao</Typography>
                </a>

                <a style={{ cursor: 'pointer', textDecoration: 'none', color: "#1b1b1bdf" }}>
                    <Typography fontSize={18} sx={hoverEffect}>Peça já</Typography>
                </a>
            </Box>
        </Box>
    )
}