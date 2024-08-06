import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';

const ImageCarousel = ({ images }) => {
    if (images.length < 3) {
        return <p>É necessário fornecer pelo menos 3 imagens.</p>;
    }

    return (
        // <Grid container spacing={2} sx={{ height: '100vh' }}>
        <Grid container sx={{ height: 'auto', minHeight: '600px' }}>
            <Grid item xs={12} md={6} sx={{ height: '600px', p: 2 }}>
                <Card sx={{ height: '100%' }}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={images[0]}
                        alt="Imagem 1"
                        sx={{ objectFit: 'cover' }}
                    />
                </Card>
            </Grid>

            {/* <Grid item xs={12} md={6} sx={{ height: '600px' }}> */}
            <Grid item xs={12} md={6} sx={{ height: 'auto', p: 2 }}>
                {/* <Grid container spacing={2} sx={{ height: '50%' }}>
                    <Grid item xs={12} sx={{ height: '100%' }}> */}
                <Grid container spacing={2}>
                    <Grid item xs={12} sx={{ height: '290px' }}>
                        <Card sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={images[1]}
                                alt="Imagem 2"
                                sx={{ objectFit: 'cover' }}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sx={{ height: '295px' }}>
                        <Card sx={{ height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={images[2]}
                                alt="Imagem 3"
                                sx={{ objectFit: 'cover' }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ImageCarousel;
