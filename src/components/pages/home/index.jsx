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
                <Box sx={{
                    // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(66, 56, 56, 0.5)), url('/images/background.jpg')",
                    // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(66, 56, 56, 0.5)), url('/images/background2.png')",
                    // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(66, 56, 56, 0.5)), url('/images/background3.jpg')",
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(66, 56, 56, 0.5)), url('/images/background4.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: { xs: '50vh', md: '60vh', lg: '100vh' }
                }}>
                    <Header scrollToSection={scrollToSection} />
                    <Box ref={heroRef}>
                        <Hero scrollToSection={scrollToSection} />
                    </Box>
                </Box>
                <Box sx={{
                    // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(66, 56, 56, 0.5)), url('/images/background.jpg')",
                    // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(66, 56, 56, 0.5)), url('/images/background2.png')",
                    // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(66, 56, 56, 0.5)), url('/images/background3.jpg')",
                    // backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(66, 56, 56, 0.5)), url('/images/background4.jpg')",
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(66, 56, 56, 0.5)), url('/images/background5.jpg')",
                    backgroundSize: "cover",
                    // backgroundPosition: "center", isso está fazendo a imagem pular quando tem menos cards
                    backgroundRepeat: "no-repeat",
                    position: 'relative'

                }}>

                    <Box ref={catalogRef}>
                        <Catalog />
                    </Box>
                </Box>
                <Box ref={mapboxRef}>
                    <MapboxMap />
                </Box>

                <Footer />
            </Box>
        </>
    );
}
