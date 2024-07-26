import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ image, title, description, price }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: '10px' }}>
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h6" component="div">
                    {price}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button fullWidth variant="contained" style={{ backgroundColor: '#da5c5d' }}>
                    Adicionar ao carrinho
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
