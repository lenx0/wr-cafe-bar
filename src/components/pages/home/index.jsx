import { useRef } from "react";
import { Box, Fab, Tooltip } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Specialties from "./specialties";
import Stats from "./stats";
import Catalog from "../catalog";
import Testimonials from "./testimonials";
import Gallery from "./gallery";
import Hours from "./hours";
import MapboxMap from "../../mapbox";
import Footer from "./footer";

export default function Home() {
  const refs = {
    hero: useRef(null),
    about: useRef(null),
    catalog: useRef(null),
    gallery: useRef(null),
    map: useRef(null),
  };

  const scrollToSection = (key) => {
    refs[key]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box sx={{ background: "#0d0907", color: "#f5ebe0" }}>
      <Header scrollToSection={scrollToSection} />

      {/* HERO com background fixo */}
      <Box
        ref={refs.hero}
        sx={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(135deg, rgba(13,9,7,0.85) 0%, rgba(13,9,7,0.65) 50%, rgba(13,9,7,0.85) 100%), url('/images/background4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Hero scrollToSection={scrollToSection} />
      </Box>

      <Box ref={refs.about}>
        <About />
      </Box>

      <Specialties />
      <Stats />

      <Box ref={refs.catalog}>
        <Catalog />
      </Box>

      <Testimonials />

      <Box ref={refs.gallery}>
        <Gallery />
      </Box>

      <Hours />

      <Box ref={refs.map}>
        <MapboxMap />
      </Box>

      <Footer />

      {/* Floating WhatsApp */}
      <Tooltip title="Fale conosco no WhatsApp" placement="left">
        <Fab
          href="https://api.whatsapp.com/send/?phone=554498019717&text=Ol%C3%A1%21+Gostaria+de+fazer+um+pedido"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "fixed",
            bottom: { xs: 20, md: 30 },
            right: { xs: 20, md: 30 },
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            color: "#fff",
            zIndex: 60,
            boxShadow: "0 12px 30px -6px rgba(37,211,102,0.5)",
            "&:hover": { transform: "scale(1.08)", background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)" },
            transition: "transform .3s ease",
          }}
        >
          <WhatsAppIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}
