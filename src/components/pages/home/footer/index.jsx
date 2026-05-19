import { Box, Container, Grid, IconButton, Stack, Typography, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ScheduleRoundedIcon from "@mui/icons-material/ScheduleRounded";

const social = [
  { icon: <InstagramIcon />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FacebookIcon />, href: "https://facebook.com", label: "Facebook" },
  { icon: <WhatsAppIcon />, href: "https://api.whatsapp.com/send/?phone=554498019717", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        background: "linear-gradient(180deg, #0d0907 0%, #1a120b 100%)",
        borderTop: "1px solid rgba(232,184,109,0.18)",
        pt: { xs: 8, md: 10 },
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Stack spacing={2.5}>
              <img src="/logos/logo.png" alt="WR Café Bar" style={{ width: 170, height: "auto" }} />
              <Typography sx={{ color: "rgba(245,235,224,0.7)", fontSize: 14.5, lineHeight: 1.7, maxWidth: 320 }}>
                Há mais de 12 anos servindo bons momentos, boa comida e boas bebidas.
                O ponto de encontro favorito da cidade.
              </Typography>
              <Stack direction="row" spacing={1.2}>
                {social.map((s) => (
                  <IconButton
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    sx={{
                      color: "#e8b86d",
                      border: "1px solid rgba(232,184,109,0.3)",
                      width: 42,
                      height: 42,
                      transition: "all .3s ease",
                      "&:hover": {
                        background: "linear-gradient(135deg, #e8b86d, #c69049)",
                        color: "#1a120b",
                        borderColor: "transparent",
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    {s.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ fontFamily: '"Playfair Display"', fontSize: 20, fontWeight: 700, mb: 2.5, color: "#e8b86d" }}>
              Contato
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnRoundedIcon sx={{ color: "#e8b86d", fontSize: 20 }} />
                <Typography sx={{ color: "rgba(245,235,224,0.75)", fontSize: 14.5 }}>
                  Rua Principal, 123 — Centro<br />Sua cidade, PR
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneRoundedIcon sx={{ color: "#e8b86d", fontSize: 20 }} />
                <Typography sx={{ color: "rgba(245,235,224,0.75)", fontSize: 14.5 }}>(44) 9801-9717</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailRoundedIcon sx={{ color: "#e8b86d", fontSize: 20 }} />
                <Typography sx={{ color: "rgba(245,235,224,0.75)", fontSize: 14.5 }}>contato@wrcafebar.com</Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ fontFamily: '"Playfair Display"', fontSize: 20, fontWeight: 700, mb: 2.5, color: "#e8b86d" }}>
              Horários
            </Typography>
            <Stack spacing={1.2}>
              {[
                ["Segunda", "Fechado"],
                ["Terça – Quinta", "17h às 23h"],
                ["Sexta – Sábado", "17h às 02h"],
                ["Domingo", "12h às 22h"],
              ].map(([d, t]) => (
                <Stack key={d} direction="row" justifyContent="space-between">
                  <Typography sx={{ color: "rgba(245,235,224,0.75)", fontSize: 14 }}>{d}</Typography>
                  <Typography sx={{ color: t === "Fechado" ? "rgba(245,235,224,0.4)" : "#f4d29a", fontWeight: 600, fontSize: 14 }}>
                    {t}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, borderColor: "rgba(232,184,109,0.15)" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1.5}
        >
          <Typography sx={{ color: "rgba(245,235,224,0.5)", fontSize: 13 }}>
            © {new Date().getFullYear()} WR Café Bar. Todos os direitos reservados.
          </Typography>
          <Typography sx={{ color: "rgba(245,235,224,0.4)", fontSize: 12.5, letterSpacing: ".05em" }}>
            Feito com café ☕ e carinho
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
