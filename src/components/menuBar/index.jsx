import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import LocalBarRoundedIcon from "@mui/icons-material/LocalBarRounded";
import SmokingRoomsRoundedIcon from "@mui/icons-material/SmokingRoomsRounded";
import WineBarRoundedIcon from "@mui/icons-material/WineBarRounded";
import CakeRoundedIcon from "@mui/icons-material/CakeRounded";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import RiceBowlRoundedIcon from "@mui/icons-material/RiceBowlRounded";

const menuItems = [
  { key: "portions", label: "Porções", icon: <RestaurantRoundedIcon /> },
  { key: "drinks", label: "Bebidas", icon: <LocalBarRoundedIcon /> },
  { key: "vine", label: "Vinhos", icon: <WineBarRoundedIcon /> },
  { key: "dessert", label: "Sobremesas", icon: <CakeRoundedIcon /> },
  { key: "additional", label: "Acompanhamentos", icon: <RiceBowlRoundedIcon /> },
  { key: "cigar", label: "Cigarros", icon: <SmokingRoomsRoundedIcon /> },
  { key: "ice", label: "Gelo", icon: <AcUnitRoundedIcon /> },
];

const MenuBar = ({ selectedCategory, onCategoryChange }) => {
  return (
    <Box sx={{ overflowX: "auto", py: 1, "&::-webkit-scrollbar": { display: "none" } }}>
      <Stack
        direction="row"
        spacing={1.2}
        sx={{
          minWidth: "fit-content",
          py: 1,
        }}
      >
        {menuItems.map((item) => {
          const active = selectedCategory === item.key;
          return (
            <Box
              key={item.key}
              component={motion.button}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(item.key)}
              sx={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1.3,
                borderRadius: 999,
                border: "1px solid",
                borderColor: active ? "transparent" : "rgba(232,184,109,0.25)",
                background: active
                  ? "linear-gradient(135deg, #e8b86d 0%, #c69049 100%)"
                  : "rgba(26,18,11,0.6)",
                color: active ? "#1a120b" : "#f5ebe0",
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all .35s ease",
                backdropFilter: "blur(8px)",
                boxShadow: active ? "0 12px 24px -8px rgba(232,184,109,0.5)" : "none",
                "&:hover": {
                  borderColor: active ? "transparent" : "rgba(232,184,109,0.6)",
                  transform: "translateY(-2px)",
                },
                "& svg": { fontSize: 18 },
              }}
            >
              {item.icon}
              {item.label}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MenuBar;
