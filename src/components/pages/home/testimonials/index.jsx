import { Box, Grid, Stack, Typography, Avatar, Rating } from "@mui/material";
import { motion } from "framer-motion";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const testimonials = [
  {
    name: "Mariana Ribeiro",
    role: "Cliente desde 2018",
    text:
      "Atendimento incrível e porções absurdas de boas. A picanha 500g virou tradição lá em casa todo sábado.",
    rating: 5,
  },
  {
    name: "Lucas Almeida",
    role: "Visitante frequente",
    text:
      "Ambiente aconchegante, música boa e drinks impecáveis. Sempre é o ponto de encontro pra fechar a semana.",
    rating: 5,
  },
  {
    name: "Patrícia Souza",
    role: "Cliente fidelizada",
    text:
      "O melhor frango a passarinho que já comi. Os garçons são atenciosos e a calabresa acebolada é viciante!",
    rating: 5,
  },
];

export default function Testimonials() {
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
          Depoimentos
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
          O que dizem nossos <Box component="span" className="text-gradient-gold">clientes</Box>
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {testimonials.map((t, i) => (
          <Grid key={t.name} item xs={12} md={4}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              sx={{
                position: "relative",
                p: { xs: 3, md: 4 },
                pt: 5,
                borderRadius: 3,
                height: "100%",
                background: "linear-gradient(160deg, rgba(232,184,109,0.05) 0%, rgba(26,18,11,0.6) 100%)",
                border: "1px solid rgba(232,184,109,0.18)",
                backdropFilter: "blur(10px)",
                transition: "transform .35s ease, border-color .35s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(232,184,109,0.4)",
                },
              }}
            >
              <FormatQuoteRoundedIcon
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  fontSize: 60,
                  color: "rgba(232,184,109,0.15)",
                }}
              />
              <Rating value={t.rating} readOnly sx={{ color: "#e8b86d", mb: 2 }} />
              <Typography sx={{ color: "rgba(245,235,224,0.85)", fontSize: 15.5, lineHeight: 1.7, mb: 3, fontStyle: "italic" }}>
                "{t.text}"
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar sx={{ bgcolor: "rgba(232,184,109,0.2)", color: "#e8b86d", fontWeight: 700 }}>
                  {t.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography sx={{ color: "#f5ebe0", fontWeight: 600 }}>{t.name}</Typography>
                  <Typography sx={{ color: "rgba(245,235,224,0.55)", fontSize: 13 }}>{t.role}</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
