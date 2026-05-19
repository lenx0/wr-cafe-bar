import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "../../pagination";

const HorizontalProductList = ({ products }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginated = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Box>
      <Stack spacing={2}>
        <AnimatePresence mode="wait">
          {paginated.map((product, i) => (
            <Box
              key={`${currentPage}-${product.title}`}
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 1.5,
                borderRadius: 2.5,
                background: "rgba(26,18,11,0.6)",
                border: "1px solid rgba(232,184,109,0.18)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Box
                component="img"
                src={product.images[0]}
                alt={product.title}
                sx={{
                  width: 86,
                  height: 86,
                  borderRadius: 2,
                  objectFit: ["drinks", "cigar", "vine"].includes(product.category) ? "contain" : "cover",
                  background: "#1a120b",
                  flexShrink: 0,
                }}
              />
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{ fontFamily: '"Playfair Display"', fontWeight: 700, fontSize: 16, color: "#f5ebe0", lineHeight: 1.2 }}>
                  {product.title}
                </Typography>
                <Typography sx={{ color: "rgba(245,235,224,0.6)", fontSize: 12.5, mt: 0.5, lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {product.description}
                </Typography>
                <Typography sx={{ mt: 0.8, fontWeight: 700, fontSize: 17, color: "#e8b86d" }}>
                  {product.price}
                </Typography>
              </Box>
            </Box>
          ))}
        </AnimatePresence>
      </Stack>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </Box>
  );
};

export default HorizontalProductList;
