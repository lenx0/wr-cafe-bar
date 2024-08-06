import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './footer';
import Header from './header';
import ImageCarousel from './carousel/ImageCarousel';

const images = [
    '/images/background.jpeg', // Substitua com o link da imagem real
    '/images/banner-drink.jpeg', // Substitua com o link da imagem real
    '/images/banner-home.jpeg', // Substitua com o link da imagem real
    '/images/banner-home2.jpeg'
];


export default function Home() {
    return (
        <>
            <Box>
                <Header />
                    <ImageCarousel images={images} />
                <Footer />
            </Box>
        </>
    );
}
