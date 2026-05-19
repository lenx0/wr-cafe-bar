import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const hours = [
  { day: "Segunda", time: "Fechado", closed: true },
  { day: "Terça", time: "17h – 23h" },
  { day: "Quarta", time: "17h – 23h" },
  { day: "Quinta", time: "17h – 00h" },
  { day: "Sexta", time: "17h – 02h" },
  { day: "Sábado", time: "12h – 02h" },
  { day: "Domingo", time: "12h – 22h" },
];

export default function Hours() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8, lg: 14 },
        background:
          "linear-gradient(135deg, #1a120b 0%, #2a1a0f 50%, #1a120b 100%)",
      }}
    >
      <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack
            spacing={3}
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <Typography sx={{ color: "#e8b86d", letterSpacing: ".25em", textTransform: "uppercase", fontSize: 13, fontWeight: 600 }}>
              Horário de funcionamento
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: { xs: 34, md: 50 },
                lineHeight: 1.1,
              }}
            >
              Estamos prontos pra <Box component="span" className="text-gradient-gold">te receber</Box>
            </Typography>
            <Typography sx={{ color: "rgba(245,235,224,0.7)", fontSize: 16, lineHeight: 1.7 }}>
              Reserve sua mesa ou peça pelo WhatsApp e garanta o melhor lugar.
              Trabalhamos com delivery nos horários de funcionamento.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<WhatsAppIcon />}
                href="https://api.whatsapp.com/send/?phone=554498019717&text=Ol%C3%A1%21+Gostaria+de+reservar+uma+mesa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar pelo WhatsApp
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              background: "rgba(13,9,7,0.6)",
              border: "1px solid rgba(232,184,109,0.25)",
              backdropFilter: "blur(14px)",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 3, pb: 2, borderBottom: "1px solid rgba(232,184,109,0.15)" }}>
              <ScheduleRoundedIcon sx={{ color: "#e8b86d" }} />
              <Typography sx={{ fontFamily: '"Playfair Display"', fontSize: 22, fontWeight: 700 }}>
                Nossa agenda semanal
              </Typography>
            </Stack>
            <Stack spacing={1.2}>
              {hours.map((h) => (
                <Stack
                  key={h.day}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    py: 1.2,
                    px: 1.5,
                    borderRadius: 1.5,
                    transition: "background .3s ease",
                    "&:hover": { background: "rgba(232,184,109,0.06)" },
                  }}
                >
                  <Typography sx={{ color: "#f5ebe0", fontWeight: 500 }}>{h.day}</Typography>
                  <Typography
                    sx={{
                      color: h.closed ? "rgba(245,235,224,0.4)" : "#e8b86d",
                      fontWeight: 600,
                      fontSize: 14,
                      letterSpacing: ".05em",
                    }}
                  >
                    {h.time}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
