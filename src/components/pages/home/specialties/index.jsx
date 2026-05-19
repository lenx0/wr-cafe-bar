import { Box, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import RestaurantMenuRoundedIcon from "@mui/icons-material/RestaurantMenuRounded";
import LocalBarRoundedIcon from "@mui/icons-material/LocalBarRounded";
import WineBarRoundedIcon from "@mui/icons-material/WineBarRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";

const items = [
  {
    icon: <RestaurantMenuRoundedIcon sx={{ fontSize: 38 }} />,
    title: "Porções da Casa",
    desc: "Receitas tradicionais, preparadas com técnica e ingredientes frescos.",
    img: "/products/picanha-com-arroz.jpeg",
  },
  {
    icon: <LocalBarRoundedIcon sx={{ fontSize: 38 }} />,
    title: "Drinks & Chopes",
    desc: "Bebidas geladas, drinks autorais e atmosfera para todo gosto.",
    img: "/images/banner-drink.jpeg",
  },
  {
    icon: <WineBarRoundedIcon sx={{ fontSize: 38 }} />,
    title: "Carta de Vinhos",
    desc: "Rótulos cuidadosamente escolhidos para harmonizar sua noite.",
    img: "/products/vinho-salton.jpeg",
  },
  {
    icon: <CakeRoundedIcon sx={{ fontSize: 38 }} />,
    title: "Sobremesas",
    desc: "Doces caseiros que fecham a experiência com chave de ouro.",
    img: "/products/pudim.jpeg",
  },
];

export default function Specialties() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8, lg: 14 },
        background: "#0d0907",
      }}
    >
      <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 8 }}>
        <Typography sx={{ color: "#e8b86d", letterSpacing: ".25em", textTransform: "uppercase", fontSize: 13, fontWeight: 600 }}>
          O que servimos
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: 34, md: 48 },
            lineHeight: 1.1,
            maxWidth: 700,
          }}
        >
          Nossas <Box component="span" className="text-gradient-gold">especialidades</Box>
        </Typography>
        <Typography sx={{ color: "rgba(245,235,224,0.65)", maxWidth: 560 }}>
          Uma seleção dos sabores que fizeram do WR um ponto de encontro favorito.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {items.map((it, i) => (
          <Grid key={it.title} item xs={12} sm={6} md={3}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              sx={{
                position: "relative",
                height: 380,
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid rgba(232,184,109,0.18)",
                "&:hover img": { transform: "scale(1.1)" },
                "&:hover .overlay": { opacity: 0.85 },
              }}
            >
              <Box
                component="img"
                src={it.img}
                alt={it.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform .8s ease",
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(13,9,7,0.1) 0%, rgba(13,9,7,0.95) 100%)",
                  opacity: 0.75,
                  transition: "opacity .4s ease",
                }}
              />
              <Stack
                spacing={1}
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  color: "#f5ebe0",
                }}
              >
                <Box sx={{ color: "#e8b86d" }}>{it.icon}</Box>
                <Typography sx={{ fontFamily: '"Playfair Display"', fontSize: 22, fontWeight: 700 }}>{it.title}</Typography>
                <Typography sx={{ fontSize: 13.5, color: "rgba(245,235,224,0.75)", lineHeight: 1.55 }}>{it.desc}</Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
