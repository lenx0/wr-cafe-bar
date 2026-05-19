import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LocalBarRoundedIcon from "@mui/icons-material/LocalBarRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = ({ scrollToSection }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        px: { xs: 3, md: 8, lg: 14 },
      }}
    >
      {/* halos decorativos */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          right: -150,
          top: -100,
          background: "radial-gradient(circle, rgba(232,184,109,0.22) 0%, transparent 65%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          left: -120,
          bottom: -150,
          background: "radial-gradient(circle, rgba(184,69,31,0.18) 0%, transparent 65%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      <Stack spacing={4} sx={{ maxWidth: 760, position: "relative", zIndex: 2 }}>
        <Box
          component={motion.div}
          {...fadeUp(0)}
          sx={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 0.8,
            borderRadius: 999,
            background: "rgba(232,184,109,0.10)",
            border: "1px solid rgba(232,184,109,0.35)",
            color: "#f4d29a",
            fontSize: 13,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e8b86d", boxShadow: "0 0 12px #e8b86d" }} />
          Aberto · Sirva-se da nossa hospitalidade
        </Box>

        <Typography
          component={motion.h1}
          {...fadeUp(0.1)}
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 800,
            lineHeight: 1.02,
            fontSize: { xs: 56, sm: 72, md: 96, lg: 120 },
            letterSpacing: "-0.03em",
            color: "#f5ebe0",
          }}
        >
          WR <Box component="span" className="text-gradient-gold">Café</Box>
          <br />
          <Box component="span" sx={{ fontStyle: "italic", fontWeight: 600 }}>Bar</Box>
        </Typography>

        <Typography
          component={motion.p}
          {...fadeUp(0.2)}
          sx={{
            fontSize: { xs: 17, md: 20 },
            color: "rgba(245,235,224,0.8)",
            maxWidth: 560,
            lineHeight: 1.6,
          }}
        >
          O melhor lugar para se reunir, comer e beber. Porções generosas,
          drinks autorais e um ambiente que aquece a alma — feito para
          encontros que valem ser lembrados.
        </Typography>

        <Stack
          component={motion.div}
          {...fadeUp(0.3)}
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ pt: 1 }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<RestaurantRoundedIcon />}
            onClick={() => scrollToSection("catalog")}
            sx={{ fontSize: 15 }}
          >
            Ver Cardápio
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            startIcon={<LocalBarRoundedIcon />}
            href="https://api.whatsapp.com/send/?phone=554498019717"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: 15 }}
          >
            Reservar mesa
          </Button>
        </Stack>

        {/* Métricas rápidas */}
        <Stack
          component={motion.div}
          {...fadeUp(0.45)}
          direction="row"
          spacing={{ xs: 3, md: 6 }}
          sx={{ pt: 4, flexWrap: "wrap", rowGap: 2 }}
        >
          {[
            { value: "+12", label: "anos de história" },
            { value: "+50", label: "rótulos & drinks" },
            { value: "4.9★", label: "avaliação média" },
          ].map((m) => (
            <Box key={m.label}>
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: { xs: 28, md: 36 },
                  fontWeight: 700,
                  color: "#e8b86d",
                  lineHeight: 1,
                }}
              >
                {m.value}
              </Typography>
              <Typography sx={{ fontSize: 13, color: "rgba(245,235,224,0.6)", letterSpacing: ".08em", textTransform: "uppercase" }}>
                {m.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>

      {/* Indicador scroll */}
      <Box
        component={motion.div}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(245,235,224,0.6)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={() => scrollToSection("about")}
      >
        <Typography sx={{ fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase" }}>Explore</Typography>
        <KeyboardArrowDownRoundedIcon />
      </Box>
    </Box>
  );
};

export default Hero;
