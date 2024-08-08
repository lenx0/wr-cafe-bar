import { Box, Button, Grid, Typography } from "@mui/material"

const Hero = () => {
    return (
        <Grid container mt={{ xs: 5, md: 10, lg: 15 }} mb={5} spacing={2}>
            <Grid item xs={12} md={6}>
                <Box ml={{ xs: 2, md: 10, lg: 25 }} textAlign={{ xs: 'center', md: 'left' }}>
                    <Typography 
                        fontSize={{ xs: 36, md: 48, lg: 72 }} 
                        fontWeight={700} 
                        color="#1b1b1bdf"
                    >
                        WR Café Bar
                    </Typography>
                    <Typography 
                        fontSize={{ xs: 16, md: 18, lg: 22 }} 
                        color="#1b1b1bdf"
                    >
                        Conheça nosso cardápio e nosso ambiente super agradável
                    </Typography>
                    <Box mt={{ xs: 5, lg: 15 }} display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                        <Button 
                            variant="contained" 
                            sx={{ 
                                backgroundColor: "#685340", 
                                fontWeight: 'bold', 
                                fontSize: { xs: 12, md: 15 }, 
                                width: { xs: 150, md: 200 }, 
                                height: { xs: 40, md: 50 }, 
                                borderRadius: 10 
                            }}
                        >
                            Cardápio
                        </Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}  display="flex" justifyContent={{ xs: 'center', md: 'end' }} alignItems="center">
                <Box mr={{ md: 5, lg: 10 }} mt={{ md: 5, xs: 5 }}>
                    <img 
                        src="/images/home-photo.png" 
                        style={{ width: '100%', maxWidth: 700, height: 'auto' }} 
                        alt="Ambiente do café"
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Hero
