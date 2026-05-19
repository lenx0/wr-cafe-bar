import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8, lg: 14 },
        background: "linear-gradient(180deg, #0d0907 0%, #1a120b 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: -200,
          top: 100,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(232,184,109,0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            sx={{ position: "relative" }}
          >
            <Box
              component="img"
              src="/images/banner-home2.jpg"
              alt="Ambiente WR Café Bar"
              sx={{
                width: "100%",
                height: { xs: 320, md: 520 },
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: -28,
                right: { xs: 16, md: -28 },
                px: 3,
                py: 2.5,
                borderRadius: 3,
                background: "linear-gradient(135deg, #e8b86d 0%, #c69049 100%)",
                color: "#1a120b",
                boxShadow: "0 20px 40px -10px rgba(232,184,109,0.5)",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <LocalCafeRoundedIcon sx={{ fontSize: 38 }} />
              <Box>
                <Typography sx={{ fontFamily: '"Playfair Display"', fontWeight: 700, fontSize: 24, lineHeight: 1 }}>+12 anos</Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 600, opacity: 0.85 }}>servindo a comunidade</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={3} component={motion.div} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <Typography sx={{ color: "#e8b86d", letterSpacing: ".25em", textTransform: "uppercase", fontSize: 13, fontWeight: 600 }}>
              Sobre nós
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: 36, md: 52 },
                lineHeight: 1.05,
                color: "#f5ebe0",
              }}
            >
              Onde cada <Box component="span" className="text-gradient-gold">encontro</Box> vira história.
            </Typography>
            <Typography sx={{ color: "rgba(245,235,224,0.75)", fontSize: { xs: 16, md: 17 }, lineHeight: 1.75 }}>
              No <strong>WR Café Bar</strong> a gente acredita que comida boa, bebida gelada
              e gente querida fazem milagre. Nosso espaço foi pensado para receber
              você como em casa com porções fartas preparadas com carinho,
              drinks autorais e aquele atendimento que faz a diferença.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ pt: 1 }}>
              {[
                { title: "Ingredientes selecionados", desc: "Compramos do produtor e preparamos no dia." },
                { title: "Ambiente acolhedor", desc: "Música, iluminação e gente boa em equilíbrio." },
              ].map((f) => (
                <Box
                  key={f.title}
                  sx={{
                    flex: 1,
                    p: 2.5,
                    borderRadius: 2.5,
                    border: "1px solid rgba(232,184,109,0.2)",
                    background: "rgba(232,184,109,0.04)",
                  }}
                >
                  <Typography sx={{ color: "#e8b86d", fontWeight: 600, mb: 0.5 }}>{f.title}</Typography>
                  <Typography sx={{ color: "rgba(245,235,224,0.7)", fontSize: 14 }}>{f.desc}</Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
