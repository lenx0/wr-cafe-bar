import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import HeaderMobile from "../../../mobile/header"

export default function Header({ scrollToSection }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

        <>
            {isMobile ? (
                <HeaderMobile scrollToSection={scrollToSection}/>
            ) : (
                <Box backgroundColor="#ffffff">
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        mt={2}
                        ml={{ xs: 2, md: 5 }}
                        gap={{ xs: 2, md: 10 }}
                        alignItems="center"
                        color="#1b1b1bdf"
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                        textAlign={{ xs: 'center', md: 'left' }}
                    >
                        <img src="/logos/logo.png" width={150} height={75} alt="Logo" />

                        <a style={{ cursor: 'pointer', textDecoration: 'none', color: "#1b1b1bdf" }} onClick={() => scrollToSection("catalog")}>
                            <Typography fontSize={{ xs: 16, md: 18 }} sx={hoverEffect}>Cardápio</Typography>
                        </a>

                        <a style={{ cursor: 'pointer', textDecoration: 'none', color: "#1b1b1bdf" }} href="https://api.whatsapp.com/send/?phone=554498019717&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                            <Typography fontSize={{ xs: 16, md: 18 }} sx={hoverEffect}>Whatsapp</Typography>
                        </a>

                        <a style={{ cursor: 'pointer', textDecoration: 'none', color: "#1b1b1bdf" }} onClick={() => scrollToSection("map")}>
                            <Typography fontSize={{ xs: 16, md: 18 }} sx={hoverEffect}>Localização</Typography>
                        </a>

                        <a style={{ cursor: 'pointer', textDecoration: 'none', color: "#1b1b1bdf" }}>
                            <Typography fontSize={{ xs: 16, md: 18 }} sx={hoverEffect}>Galeria</Typography>
                        </a>
                        <a style={{ cursor: 'pointer', textDecoration: 'none', color: "#1b1b1bdf" }}>
                            <Typography fontSize={{ xs: 16, md: 18 }} sx={hoverEffect}>Peça já</Typography>
                        </a>
                    </Box>
                </Box>
            )}
        </>
    )
}
