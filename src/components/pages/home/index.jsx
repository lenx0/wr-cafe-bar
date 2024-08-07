import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './footer';
import Header from './header';
import Catalog from '../catalog'
import ImageCarousel from './carousel/ImageCarousel';
import MapboxMap from '../../mapbox';

const images = [
    '/images/banner-home.jpeg', // Substitua com o link da imagem real
    '/images/banner-drink.jpeg', // Substitua com o link da imagem real
    '/images/banner-home5.jpg', // Substitua com o link da imagem real
    '/images/banner-home2.jpeg'
];


export default function Home() {
    return (
        <>
            <Box backgroundColor="#ffffff">
                <Header />
                    <ImageCarousel images={images} />
                    <Catalog />
                    <MapboxMap />
                <Footer />
            </Box>
        </>
    );
}
