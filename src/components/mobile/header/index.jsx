import { useState } from "react";
import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const items = [
  { label: "Sobre", target: "about", icon: <InfoOutlinedIcon /> },
  { label: "Cardápio", target: "catalog", icon: <RestaurantRoundedIcon /> },
  { label: "Galeria", target: "gallery", icon: <PhotoLibraryRoundedIcon /> },
  { label: "Localização", target: "map", icon: <LocationOnRoundedIcon /> },
];

const HeaderMobile = ({ scrollToSection }) => {
  const [open, setOpen] = useState(false);

  const handle = (target) => {
    if (target === "whatsapp") {
      window.open(
        "https://wa.me/554498019717?text=" + encodeURIComponent("Olá! Gostaria de mais informações."),
        "_blank"
      );
    } else {
      scrollToSection(target);
    }
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          color: "#e8b86d",
          border: "1px solid rgba(232,184,109,0.35)",
          background: "rgba(13,9,7,0.5)",
          backdropFilter: "blur(6px)",
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 290,
            background: "linear-gradient(180deg, #1a120b 0%, #0d0907 100%)",
            color: "#f5ebe0",
            borderLeft: "1px solid rgba(232,184,109,0.18)",
          },
        }}
      >
        <Stack sx={{ height: "100%" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2.5 }}>
            <img src="/logos/logo.png" alt="WR Café Bar" style={{ width: 120 }} />
            <IconButton onClick={() => setOpen(false)} sx={{ color: "#f5ebe0" }}>
              <CloseRoundedIcon />
            </IconButton>
          </Stack>

          <Stack spacing={0.5} sx={{ px: 1.5, mt: 2, flex: 1 }}>
            {items.map((it) => (
              <Stack
                key={it.label}
                direction="row"
                alignItems="center"
                spacing={2}
                onClick={() => handle(it.target)}
                sx={{
                  px: 2,
                  py: 1.6,
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "all .25s ease",
                  color: "rgba(245,235,224,0.85)",
                  "& svg": { color: "#e8b86d" },
                  "&:hover": { background: "rgba(232,184,109,0.08)", color: "#fff" },
                }}
              >
                {it.icon}
                <Typography sx={{ fontSize: 16, fontWeight: 500 }}>{it.label}</Typography>
              </Stack>
            ))}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              onClick={() => handle("whatsapp")}
              sx={{
                mx: 1,
                mt: 2,
                px: 2,
                py: 1.6,
                borderRadius: 2,
                cursor: "pointer",
                background: "linear-gradient(135deg, #e8b86d 0%, #c69049 100%)",
                color: "#1a120b",
                fontWeight: 700,
                boxShadow: "0 12px 24px -8px rgba(232,184,109,0.45)",
              }}
            >
              <WhatsAppIcon />
              <Typography sx={{ fontSize: 15, fontWeight: 700 }}>Peça já pelo WhatsApp</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" justifyContent="center" spacing={1} sx={{ p: 3, borderTop: "1px solid rgba(232,184,109,0.15)" }}>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "#e8b86d" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "#e8b86d" }}>
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
};

export default HeaderMobile;
