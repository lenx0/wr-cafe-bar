import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './footer';
import Header from './header';

const Banner = styled('img')({
    width: '100%',
    height: '900px',
    objectFit: 'cover'
});



export default function Home() {
    return (
        <>
            <Box>
                <Header />
                {/* <Banner src="/images/banner-home.jpeg" alt="Banner do Barzinho" /> */}
                {/* <Banner src="/images/banner-drink.jpeg" alt="Banner do Barzinho" /> */}
                <Banner src="/images/banner-home5.jpg" alt="Banner do Barzinho" />
                {/* <Banner src="/logos/logo.png" alt="Banner do Barzinho" /> */}
                <Footer />
            </Box>
        </>
    );
}
