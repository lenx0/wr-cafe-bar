import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import Header from "../header";

const Hero = ({ scrollToSection }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Grid
                container
                mt={{ xs: 5, md: 10, lg: 15 }}
                mb={5}
                spacing={2}
            >
                <Grid item xs={12} md={6}>
                    <Box ml={{ md: 10, lg: 25 }} textAlign={{ xs: 'center', md: 'left' }}>
                        {isMobile ? (
                            <img src="/logos/logo.png" width={300} />
                        ) : (
                            <Typography
                                fontSize={{ xs: 66, md: 48, lg: 72 }}
                                fontWeight={700}
                                color="#fcfcfc"
                            >
                                WR Café Bar
                            </Typography>
                        )}
                        <Typography
                            fontSize={{ xs: 16, md: 18, lg: 22 }}
                            margin={{ xs: 1 }}
                            color="#ffffff"
                        >
                            O melhor lugar para se levantar, comer e beber, em um ambiente agradável e confortável.
                        </Typography>
                            <Box mt={{ xs: 5, lg: 15 }} display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                                <Button
                                    variant="contained"
                                    onClick={() => scrollToSection("catalog")}
                                    sx={{
                                        backgroundColor: "#4d3c2b",
                                        '&:hover': {
                                            backgroundColor: "#33271c"
                                        },
                                        fontWeight: 'bold',
                                        fontSize: { xs: 12, md: 15 },
                                        width: { xs: 150, md: 200 },
                                        height: { xs: 40, md: 50 },
                                        borderRadius: 2
                                    }}
                                >
                                    Cardápio
                                </Button>
                            </Box>
                    </Box>
                </Grid>
                {/* <Grid item xs={12} md={6} lg={6} display="flex" justifyContent={{ xs: 'center', md: 'end' }} alignItems="center">
                <Box mr={{ md: 5, lg: 10 }} mt={{ md: 5, xs: 5 }}>
                    <img
                        // src="/images/home-photo.png" 
                        src="/images/home-photo2.jpg"
                        style={{ width: '100%', maxWidth: 700, height: 'auto' }}
                        alt="Ambiente do café"
                    />
                </Box>
            </Grid> */}
            </Grid>
        </>
    )
}

export default Hero
