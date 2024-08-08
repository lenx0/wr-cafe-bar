import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Stack, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const ProductCard = ({ images, category, title, description, price }) => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const maxDescriptionLength = 250;
    const isLongDescription = description.length > maxDescriptionLength;

    return (
        <Card sx={{ maxWidth: 345, height: { xs: 'auto', md: 500 }, borderRadius: '10px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)' }}>
            <Box sx={{ height: { xs: 'auto', md: 'auto' }, overflow: 'hidden', alignItems: 'center', padding: '20px' }}>
                <Typography gutterBottom component="div" sx={{
                    color: '#da5c5d',
                    fontWeight: 'bold',
                    fontSize: { xs: 18, md: 22 },
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
                    <CardMedia
                        component="img"
                        height="200"
                        image={images[0]}
                        alt={title}
                        sx={{ objectFit: category === 'drinks' || category === 'cigar' || category === 'vine' ? 'contain' : 'cover', borderRadius: '10px', marginTop: '15px', marginBottom: '15px', width: '100%' }}
                    />
                )}
            </Box>
            <CardContent sx={{ height: { xs: 'auto', md: 220 }, overflow: 'hidden' }}>
                <Stack gap={1}>
                    <Typography variant="h5" fontWeight="bold" component="div" color='#da5c5d' lineHeight='33px'>
                        {price}
                    </Typography>
                    <Box borderTop='1px solid #E6E6E6' paddingTop={1}>
                        <Typography variant="body" fontWeight="bold" color="#7e7e7e">
                            Descrição
                        </Typography>
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
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
