import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

const stats = [
  { value: "+12", label: "Anos de história" },
  { value: "+8k", label: "Clientes felizes" },
  { value: "+50", label: "Itens no cardápio" },
  { value: "4.9★", label: "Avaliação Google" },
];

export default function Stats() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 6, md: 8 },
        px: { xs: 3, md: 8, lg: 14 },
        background: "linear-gradient(90deg, #1a120b 0%, #2a1a0f 50%, #1a120b 100%)",
        borderTop: "1px solid rgba(232,184,109,0.15)",
        borderBottom: "1px solid rgba(232,184,109,0.15)",
      }}
    >
      <Grid container spacing={3}>
        {stats.map((s, i) => (
          <Grid key={s.label} item xs={6} md={3}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              sx={{ textAlign: "center" }}
            >
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 800,
                  fontSize: { xs: 42, md: 64 },
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #f4d29a 0%, #c69049 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: { xs: 11, md: 13 },
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "rgba(245,235,224,0.7)",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
