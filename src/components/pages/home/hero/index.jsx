import { Box, Button, Grid, Typography } from "@mui/material"

const Hero = () => {
    return (
        <Grid container mt={15} mb={5}>
            <Grid item lg={6}>
                <Box ml={25}>
                    <Typography fontSize={72} fontWeight={700} color="#1b1b1bdf">WR Café Bar</Typography>
                    <Typography fontSize={22} color="#1b1b1bdf">Conheça nosso cardápio e nosso ambiente super agradável</Typography>
                    <Box mt={15}>
                        <Button variant="contained" sx={{ backgroundColor: "#685340", fontWeight: 'bold', fontSize: 15, width: 200, height: 50, borderRadius: 10 }}>Cardápio</Button>
                    </Box>
                </Box>
            </Grid>
            <Grid item lg={6} alignItems="end">
                <Box display="flex" justifyContent="end" mr={10}>
                    <img src="/images/home-photo.png" />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Hero