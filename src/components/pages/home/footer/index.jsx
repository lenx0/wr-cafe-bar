import { Box, Button, Checkbox, Container, FormControlLabel, Grid, Stack, TextField, Typography } from "@mui/material";
import { styled } from '@mui/system';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

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
        <>
            {/* <Box backgroundColor="#332525" height={400}>
                <Grid container backgroundColor="red" height="100%">
                    <Grid item lg={4} backgroundColor="yellow">
                        <Stack>
                            <Typography variant="h5" color="white" fontWeight="bold">Nosso barzinho</Typography>
                        </Stack><Stack>
                            <Typography variant="h5" color="white" fontWeight="bold">Nosso barzinho</Typography>
                        </Stack><Stack>
                            <Typography variant="h5" color="white" fontWeight="bold">Nosso barzinho</Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} backgroundColor="grey">
                        <Stack>
                            <Typography variant="h5" color="white" fontWeight="bold">Nosso barzinho</Typography>
                        </Stack><Stack>
                            <Typography variant="h5" color="white" fontWeight="bold">Nosso barzinho</Typography>
                        </Stack><Stack>
                            <Typography variant="h5" color="white" fontWeight="bold">Nosso barzinho</Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={4} backgroundColor="purple">
                        <Stack>
                            <Typography variant="h5" color="white" fontWeight="bold">Nosso barzinho</Typography>
                        </Stack>
                        <Stack>
                            <Typography variant="h5" color="white" fontWeight="bold">Nosso barzinho</Typography>
                        </Stack>
                        <Stack>
                            <Typography variant="h5" color="white" fontWeight="bold">Nosso barzinho</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box> */}


            <Box sx={{ backgroundColor: '#f5f5f5', color: 'black', py: 6 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3}>
                            <Box>

                            </Box>
                            <img src="/logos/visa.jpg" alt="WR Cafe Bar" style={{ width: '70px', height: '50px' }} />
                            <Box>
                                <img src="/logos/master.jpg" alt="Verificada" style={{ width: '70px', height: '45px' }} />
                            </Box>
                            <Box>
                                <img src="/logos/american.png" alt="Prêmio" style={{ width: '70px', height: '45px' }} />
                            </Box>
                            {/* <Box sx={{ display: 'flex', mt: 2 }}>
                                <Link href="https://www.facebook.com" sx={{ color: 'white', mr: 2 }}>
                                    <img src="/path-to-facebook-icon.png" alt="Facebook" />
                                </Link>
                                <Link href="https://www.instagram.com" sx={{ color: 'white' }}>
                                    <img src="/path-to-instagram-icon.png" alt="Instagram" />
                                </Link>
                            </Box> */}
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6" gutterBottom>
                                Unidades
                            </Typography>
                            <Typography variant="body2">Nossos Produtos</Typography>
                            <Typography variant="body2">Eventos</Typography>
                            <Typography variant="body2">Contato</Typography>
                            <Typography variant="body2">Gift Card</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6" gutterBottom>
                                Trabalhe Conosco
                            </Typography>
                            <Typography variant="body2">Seja Sócio</Typography>
                            <Typography variant="body2">Transparência Salarial</Typography>
                            <Typography variant="body2">Remoção de Dados</Typography>
                            <Typography variant="body2">Política de Privacidade</Typography>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Button
                                    variant="contained"
                                    href="https://www.apple.com/app-store/"
                                    sx={{ mb: 1, backgroundColor: '#000', color: '#fff', textTransform: 'none' }}
                                >
                                    <img src="/logos/appstore.png" alt="App Store" style={{ width: '120px' }} />
                                </Button>
                                <Button
                                    variant="contained"
                                    href="https://play.google.com/store"
                                    sx={{ mb: 2, backgroundColor: '#000', color: '#fff', textTransform: 'none' }}
                                >
                                    <img src="/logos/googleplay.png" alt="Google Play" style={{ width: '120px' }} />
                                </Button>
                                <Typography variant="h6" gutterBottom>
                                    Newsletter
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="E-mail"
                                    sx={{
                                        backgroundColor: '#fff',
                                        borderRadius: '4px',
                                        mb: 1,
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: 'rgba(0, 0, 0, 0.23)',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#da5c5d',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#da5c5d',
                                            },
                                        },
                                    }}
                                />
                                <FormControlLabel
                                    control={<Checkbox sx={{ color: '#da5c5d' }} />}
                                    label={<Typography variant="body2">Aceito a <Link href="#" underline="always" sx={{ color: '#da5c5d' }}>política de privacidade</Link>.</Typography>}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Stack sx={{
                position: 'relative', //fixed até 900px abaixo adicionar relative
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: "#181818dd",
                color: '#fff',
                padding: '20px',
                textAlign: 'center',
                // marginTop: '40px',
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
        </>
    )
}