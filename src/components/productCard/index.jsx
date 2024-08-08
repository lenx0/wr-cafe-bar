import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box, Dialog, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Carousel from 'react-material-ui-carousel';

const ProductCard = ({ images, category, title, description, price }) => {
    const [showMore, setShowMore] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const maxDescriptionLength = 250;
    const isLongDescription = description.length > maxDescriptionLength;

    return (
        <>
            <Card sx={{ maxWidth: 345, height: 500, borderRadius: '10px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)' }}>
                <Box sx={{ height: 'auto', overflow: 'hidden', alignItems: 'center', padding: '20px 20px 0 20px' }}>
                    <Typography gutterBottom component="div" sx={{
                        color: '#da5c5d',
                        fontWeight: 'bold',
                        fontSize: 22,
                        lineHeight: '25px',
                        letterSpacing: '-0.015rem',
                        textAlign: 'center',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>
                        {title}
                    </Typography>
                    {images.length > 1 ? (
                        <Carousel sx={{ width: '100%', height: '100%' }}
                            indicators={true}
                        >
                            {images.map((image, index) => (
                                <CardMedia
                                    key={index}
                                    component="img"
                                    height="200"
                                    image={image}
                                    alt={`${title} image ${index + 1}`}
                                    sx={{ objectFit: 'cover', borderRadius: '10px', marginTop: '10px', marginBottom: '15px', width: '100%' }}
                                />
                            ))}
                        </Carousel>
                    ) : (
                        <>
                            <CardMedia
                                component="img"
                                height="200"
                                image={images[0]}
                                alt={title}
                                sx={{ objectFit: category === 'drinks' || category === 'cigar' || category === 'vine' ? 'contain' : 'cover', borderRadius: '10px', marginTop: '15px', marginBottom: '15px', width: '100%' }}
                            />
                            <Box height={10} />
                        </>
                    )}
                </Box>
                <CardContent sx={{ height: 220, overflow: 'hidden' }}>
                    <Stack gap={1}>
                        <Stack>
                            <Typography variant="h5" fontWeight="bold" component="div" color='#da5c5d' lineHeight='33px'>
                                {price}
                            </Typography>
                        </Stack>
                        <Stack borderTop='1px solid #E6E6E6' paddingTop={1}>
                            <Typography variant="body" fontWeight="bold" color="#7e7e7e">
                                Descrição
                            </Typography>
                        </Stack>
                        <Stack>

                        <Typography variant="body2" color="#9E9E9E">
      {isLongDescription ? (
        <>
          <span>
            {showMore ? description : `${description.substring(0, maxDescriptionLength)}...`}
          </span>
          <Button
            sx={{ color: "#da5c5d", fontWeight: "bold" }}
            onClick={toggleShowMore}
          >
            {showMore ? 'Ver menos' : 'Ver mais'}
          </Button>
        </>
      ) : (
        description
      )}
    </Typography>

                        </Stack>
                    </Stack>
                </CardContent>
                <CardActions>
                    {/* <Box display="flex" width="100%">
                        <Button variant="contained" fullWidth sx={{ backgroundColor: "#da5c5d", borderRadius: '5px', margin: '10px' }}>
                            Adicionar no carrinho
                        </Button>
                    </Box> */}
                </CardActions>
            </Card>

            {/* <Dialog anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 350, padding: 20 }}>
                    <IconButton
                        onClick={toggleDrawer(false)}
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            color: '#da5c5d'
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Card>
                        <Box sx={{ height: 'auto', overflow: 'hidden', alignItems: 'center', padding: 2 }}>
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
                                            sx={{ objectFit: 'cover', borderRadius: '10px', marginTop: '15px', marginBottom: '15px', width: '100%' }}
                                        />
                                    ))}
                                </Carousel>
                            ) : (
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={images[0]}
                                    alt={title}
                                    sx={{ objectFit: 'cover', borderRadius: '10px', marginTop: '15px', marginBottom: '15px', width: '100%' }}
                                />
                            )}
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{
                                color: '#da5c5d',
                                fontWeight: 'bold',
                                fontSize: 22,
                                lineHeight: '25px',
                                letterSpacing: '-0.015rem',
                                textAlign: 'center',
                            }}>
                                {title}
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" color='#da5c5d' component="div" padding="10px 0 10px 0" lineHeight='33px' borderTop='2px solid #f1eaea' >
                                {price}
                            </Typography>
                            <Typography variant="body2" color="#9E9E9E">
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
                </Box>
            </Dialog> */}
        </>
    );
};

export default ProductCard;