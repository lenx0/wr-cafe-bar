import React, { useRef } from 'react';
import { Box } from '@mui/material';
import Footer from './footer';
import Header from './header';
import Catalog from '../catalog'
import MapboxMap from '../../mapbox';
import Hero from './hero';



export default function Home() {

    const heroRef = useRef(null);
    const catalogRef = useRef(null);
    const mapboxRef = useRef(null);

    const scrollToSection = (section) => {
        switch (section) {
            case "hero":
                heroRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "catalog":
                catalogRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "map":
                mapboxRef.current.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Box backgroundColor="#ffffff">
            <Header scrollToSection={scrollToSection} />

            <Box ref={heroRef}>
                <Hero />
            </Box>
            
            <Box ref={catalogRef}>
                <Catalog />
            </Box>
            
            <Box ref={mapboxRef}>
                <MapboxMap />
            </Box>
            
            <Footer />
        </Box>
        </>
    );
}
