import { useEffect, useState } from "react";
import { Box, Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import HeaderMobile from "../../../mobile/header";

const NAV = [
  { label: "Início", target: "hero" },
  { label: "Sobre", target: "about" },
  { label: "Cardápio", target: "catalog" },
  { label: "Galeria", target: "gallery" },
  { label: "Localização", target: "map" },
];

export default function Header({ scrollToSection }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isMobile) {
    return (
      <Box
        sx={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          px: 2, py: 1.2,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "all .35s ease",
          background: scrolled ? "rgba(13,9,7,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(232,184,109,0.15)" : "1px solid transparent",
        }}
      >
        <img src="/logos/logo.png" alt="WR Café Bar" style={{ width: 100, height: "auto" }} />
        <HeaderMobile scrollToSection={scrollToSection} />
      </Box>
    );
  }

  return (
    <AnimatePresence>
      <Box
        component={motion.header}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          px: { md: 4, lg: 8 },
          py: scrolled ? 1.2 : 2.2,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "all .35s ease",
          background: scrolled ? "rgba(13,9,7,0.78)" : "transparent",
          backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(232,184,109,0.18)" : "1px solid transparent",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{ cursor: "pointer" }}
          onClick={() => scrollToSection("hero")}
        >
          <img
            src="/logos/logo.png"
            alt="WR Café Bar"
            style={{ width: scrolled ? 110 : 140, height: "auto", transition: "all .35s ease" }}
          />
        </Stack>

        <Stack direction="row" spacing={4} alignItems="center">
          {NAV.map((item) => (
            <Box
              key={item.target}
              component="a"
              onClick={() => scrollToSection(item.target)}
              sx={{
                cursor: "pointer",
                color: "#f5ebe0",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: ".02em",
                position: "relative",
                py: 0.5,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -4,
                  width: "100%",
                  height: 2,
                  background: "linear-gradient(90deg, #e8b86d, #c69049)",
                  transformOrigin: "left",
                  transform: "scaleX(0)",
                  transition: "transform .35s ease",
                },
                "&:hover": { color: "#f4d29a" },
                "&:hover::after": { transform: "scaleX(1)" },
              }}
            >
              {item.label}
            </Box>
          ))}
          <Button
            variant="contained"
            color="primary"
            size="small"
            href="https://api.whatsapp.com/send/?phone=554498019717&text=Ol%C3%A1%2C+gostaria+de+fazer+um+pedido"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: 13 }}
          >
            Peça já
          </Button>
        </Stack>
      </Box>
    </AnimatePresence>
  );
}
