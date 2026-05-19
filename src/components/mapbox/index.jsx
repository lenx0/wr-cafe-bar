import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import DirectionsRoundedIcon from "@mui/icons-material/DirectionsRounded";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerRetina from "leaflet/dist/images/marker-icon-2x.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconRetinaUrl: markerRetina,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const position = { lat: -23.4117287, lng: -51.9552946 };

export default function MapboxMap() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        px: { xs: 3, md: 8, lg: 14 },
        background: "#0d0907",
      }}
    >
      <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 6 }}>
        <Typography sx={{ color: "#e8b86d", letterSpacing: ".25em", textTransform: "uppercase", fontSize: 13, fontWeight: 600 }}>
          Onde estamos
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: 34, md: 50 },
            lineHeight: 1.1,
          }}
        >
          Venha nos <Box component="span" className="text-gradient-gold">visitar</Box>
        </Typography>
        <Typography sx={{ color: "rgba(245,235,224,0.65)", maxWidth: 560 }}>
          Estacionamento próximo e ambiente confortável. Esperamos por você!
        </Typography>
      </Stack>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        sx={{
          position: "relative",
          borderRadius: 4,
          overflow: "hidden",
          border: "1px solid rgba(232,184,109,0.25)",
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)",
        }}
      >
        <MapContainer
          center={position}
          zoom={14}
          scrollWheelZoom={false}
          style={{ height: "460px", width: "100%", filter: "saturate(0.85) brightness(0.85)" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>WR Café Bar — Estamos aqui!</Popup>
          </Marker>
        </MapContainer>

        <Box
          sx={{
            position: "absolute",
            top: { xs: 16, md: 24 },
            left: { xs: 16, md: 24 },
            right: { xs: 16, md: "auto" },
            maxWidth: 320,
            p: 3,
            borderRadius: 3,
            background: "rgba(13,9,7,0.88)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(232,184,109,0.3)",
            zIndex: 1000,
          }}
        >
          <Typography sx={{ fontFamily: '"Playfair Display"', fontSize: 20, fontWeight: 700, color: "#e8b86d", mb: 1 }}>
            WR Café Bar
          </Typography>
          <Typography sx={{ color: "rgba(245,235,224,0.8)", fontSize: 14, mb: 2, lineHeight: 1.6 }}>
            Rua Principal, 123 — Centro<br />Sua cidade, PR
          </Typography>
          <Button
            href={`https://www.google.com/maps/dir/?api=1&destination=${position.lat},${position.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
            startIcon={<DirectionsRoundedIcon />}
            size="small"
            fullWidth
          >
            Como chegar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
