import { useState } from "react";
import { Card, CardMedia, Typography, Box, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import Carousel from "react-material-ui-carousel";

const categoryLabel = {
  portions: "Porção",
  drinks: "Bebida",
  cigar: "Cigarro",
  vine: "Vinho",
  dessert: "Sobremesa",
  ice: "Gelo",
  additional: "Acompanhamento",
};

const ProductCard = ({ images, category, title, description, price, featured }) => {
  const [showMore, setShowMore] = useState(false);
  const maxDesc = 110;
  const isLong = description && description.length > maxDesc;
  const containImage = ["drinks", "cigar", "vine"].includes(category);

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: "relative",
        height: "100%",
        background: "linear-gradient(165deg, rgba(34,22,16,0.95) 0%, rgba(13,9,7,0.95) 100%)",
        border: "1px solid rgba(232,184,109,0.18)",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)",
        transition: "border-color .35s ease, box-shadow .35s ease",
        "&:hover": {
          borderColor: "rgba(232,184,109,0.5)",
          boxShadow: "0 30px 60px -20px rgba(232,184,109,0.25)",
        },
      }}
    >
      {featured && (
        <Chip
          icon={<LocalFireDepartmentRoundedIcon sx={{ fontSize: 16 }} />}
          label="Popular"
          size="small"
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            zIndex: 3,
            background: "linear-gradient(135deg, #e8b86d, #c69049)",
            color: "#1a120b",
            fontWeight: 700,
            fontSize: 11,
            height: 24,
          }}
        />
      )}

      <Box sx={{ position: "relative", height: 220, overflow: "hidden", background: "#1a120b" }}>
        {images.length > 1 ? (
          <Carousel
            sx={{ width: "100%", height: "100%" }}
            indicators={true}
            navButtonsAlwaysInvisible
            indicatorIconButtonProps={{ style: { color: "rgba(232,184,109,0.4)" } }}
            activeIndicatorIconButtonProps={{ style: { color: "#e8b86d" } }}
          >
            {images.map((image, index) => (
              <CardMedia
                key={index}
                component="img"
                image={image}
                alt={`${title} ${index + 1}`}
                sx={{ height: 220, objectFit: "cover", transition: "transform .8s ease" }}
              />
            ))}
          </Carousel>
        ) : (
          <CardMedia
            component="img"
            image={images[0]}
            alt={title}
            sx={{
              height: 220,
              objectFit: containImage ? "contain" : "cover",
              p: containImage ? 1.5 : 0,
              transition: "transform .8s ease",
              "&:hover": { transform: "scale(1.06)" },
            }}
          />
        )}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 60%, rgba(13,9,7,0.85) 100%)",
            pointerEvents: "none",
          }}
        />
        <Chip
          label={categoryLabel[category] || category}
          size="small"
          sx={{
            position: "absolute",
            top: 14,
            left: 14,
            background: "rgba(13,9,7,0.7)",
            backdropFilter: "blur(8px)",
            color: "#e8b86d",
            border: "1px solid rgba(232,184,109,0.3)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: ".05em",
            textTransform: "uppercase",
            height: 24,
          }}
        />
      </Box>

      <Box sx={{ p: 2.5 }}>
        <Stack spacing={1.2}>
          <Typography
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              fontSize: 19,
              color: "#f5ebe0",
              lineHeight: 1.2,
              minHeight: 46,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: 13.5,
              color: "rgba(245,235,224,0.65)",
              lineHeight: 1.55,
              minHeight: 42,
            }}
          >
            {isLong && !showMore ? `${description.substring(0, maxDesc)}...` : description}
            {isLong && (
              <Box
                component="span"
                onClick={() => setShowMore(!showMore)}
                sx={{ color: "#e8b86d", cursor: "pointer", ml: 0.5, fontWeight: 600, "&:hover": { textDecoration: "underline" } }}
              >
                {showMore ? "menos" : "mais"}
              </Box>
            )}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ pt: 1.2, mt: 0.5, borderTop: "1px solid rgba(232,184,109,0.12)" }}
          >
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                fontSize: 24,
                background: "linear-gradient(135deg, #f4d29a 0%, #c69049 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {price}
            </Typography>
            <Box
              component="a"
              href={`https://api.whatsapp.com/send/?phone=554498019717&text=Ol%C3%A1%21+Gostaria+de+pedir%3A+${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".05em",
                textTransform: "uppercase",
                color: "#e8b86d",
                textDecoration: "none",
                px: 1.5,
                py: 0.6,
                borderRadius: 999,
                border: "1px solid rgba(232,184,109,0.4)",
                transition: "all .3s ease",
                "&:hover": { background: "rgba(232,184,109,0.12)", borderColor: "#e8b86d" },
              }}
            >
              Pedir
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
};

export default ProductCard;
