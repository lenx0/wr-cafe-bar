import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const images = [
  { src: "/products/picanha-com-arroz.jpeg", span: { col: 2, row: 2 } },
  { src: "/products/calabresa-acebolada.jpeg", span: { col: 1, row: 1 } },
  { src: "/products/porcao-batata.jpeg", span: { col: 1, row: 1 } },
  { src: "/products/porcao-frios.jpeg", span: { col: 1, row: 2 } },
  { src: "/products/porcao-tilapia.jpeg", span: { col: 1, row: 1 } },
  { src: "/images/banner-drink.jpeg", span: { col: 1, row: 1 } },
  { src: "/products/bolo-taca.jpeg", span: { col: 1, row: 1 } },
  { src: "/products/vinho-salton.jpeg", span: { col: 1, row: 1 } },
];

export default function Gallery() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8, lg: 14 },
        background: "linear-gradient(180deg, #0d0907 0%, #1a120b 100%)",
      }}
    >
      <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 8 }}>
        <Typography sx={{ color: "#e8b86d", letterSpacing: ".25em", textTransform: "uppercase", fontSize: 13, fontWeight: 600 }}>
          Galeria
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: 34, md: 48 },
            lineHeight: 1.1,
          }}
        >
          Um <Box component="span" className="text-gradient-gold">gostinho</Box> do nosso ambiente
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gridAutoRows: { xs: 140, md: 220 },
        }}
      >
        {images.map((img, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 2.5,
              gridColumn: { md: `span ${img.span.col}` },
              gridRow: { md: `span ${img.span.row}` },
              cursor: "pointer",
              "&:hover img": { transform: "scale(1.12)" },
              "&:hover .ov": { opacity: 0.2 },
            }}
          >
            <Box
              component="img"
              src={img.src}
              alt=""
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform .8s ease",
              }}
            />
            <Box
              className="ov"
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(13,9,7,0.6) 100%)",
                opacity: 0.5,
                transition: "opacity .35s ease",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
