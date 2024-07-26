import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Drawer, Box, Dialog } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const ProductCard = ({ images, title, description, price }) => {
    const [showMore, setShowMore] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const maxDescriptionLength = 200;
    const isLongDescription = description.length > maxDescriptionLength;

    return (
        <>
            <Card sx={{ maxWidth: 345, margin: '20px' }}>
                <Box sx={{ height: 'auto', overflow: 'hidden', display: 'flex', alignItems: 'center' }} /*height: 240*/>
                    {images.length > 1 ? (
                        <Carousel sx={{ width: '100%', height: '100%' }}
                            indicators={true}
                        >
                            {images.map((image, index) => (
                                <CardMedia
                                    key={index}
                                    component="img"
                                    height="240"
                                    image={image}
                                    alt={`${title} image ${index + 1}`}
                                    sx={{ objectFit: 'cover' }}
                                />
                            ))}
                        </Carousel>
                    ) : (
                        <CardMedia
                            component="img"
                            height="240"
                            image={images[0]}
                            alt={title}
                            sx={{ objectFit: 'cover', marginBottom: 4 }} //retirar o marginBottom caso remover o height auto no box principal deste componente 
                        />
                    )}
                </Box>
                <CardContent sx={{ height: 220, overflow: 'hidden' }}>
                    <Typography variant="h6" component="div">
                        {price}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {isLongDescription ? (
                            <>
                                {showMore ? description : `${description.substring(0, maxDescriptionLength)}...`}
                                <Button size="small" onClick={toggleDrawer(true)}>
                                    {showMore ? 'Ver menos' : 'Ver mais'}
                                </Button>
                            </>
                        ) : (
                            description
                        )}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Box display="flex" width="100%">
                        <Button variant="contained" fullWidth sx={{ backgroundColor: "#da5c5d" }}>
                            Adicionar no carrinho
                        </Button>
                    </Box>

                </CardActions>
            </Card>
            <Dialog anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <div style={{ width: 350, padding: 20 }}>
                    <Card>
                        <Box sx={{ height: 240, overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                            {images.length > 1 ? (
                                <Carousel sx={{ width: '100%', height: '100%' }}
                                    indicators={true}
                                    navButtonsAlwaysVisible={true} >
                                    {images.map((image, index) => (
                                        <CardMedia
                                            key={index}
                                            component="img"
                                            height="240"
                                            image={image}
                                            alt={`${title} image ${index + 1}`}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                    ))}
                                </Carousel>
                            ) : (
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={images[0]}
                                    alt={title}
                                    sx={{ objectFit: 'cover' }}
                                />
                            )}
                        </Box>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {price}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" width="100%">
                                <Button variant="contained" fullWidth sx={{ backgroundColor: "#da5c5d" }}>
                                    Adicionar no carrinho
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </div>
            </Dialog>
        </>
    );
};

export default ProductCard;