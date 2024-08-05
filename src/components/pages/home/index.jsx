import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Footer from './footer';
import Header from './header';

const Banner = styled('img')({
    width: '100%',
    height: '600px',
    objectFit: 'cover //contain para fazer um carousel'
});


export default function Home() {
    return (
        <>
            <Box>
                <Header/>
                <Footer />
            </Box>
        </>
    );
}
