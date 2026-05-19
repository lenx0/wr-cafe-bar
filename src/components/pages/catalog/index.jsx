import { useState, useMemo } from "react";
import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import ProductCard from "../../productCard";
import MenuBar from "../../menuBar";
import SearchBar from "./searchBar";
import HorizontalProductList from "../../catalog/horizontalProductList";
import Pagination from "../../pagination";

const imgBaseUrl = "/products/";

const products = [
  { images: [`${imgBaseUrl}frangopassarinho.jpeg`], category: "portions", title: "Frango a passarinho", description: "Porção de frango a passarinho serve até 3 pessoas", price: "R$ 19,90", featured: true },
  { images: [`${imgBaseUrl}picanha-com-arroz.jpeg`], category: "portions", title: "Picanha 500g", description: "Picanha preparada com técnicas da casa, acompanha arroz à grega.", price: "R$ 120,00", featured: true },
  { images: [`${imgBaseUrl}calabresa-acebolada.jpeg`, `${imgBaseUrl}calabresa-acebolada2.jpeg`], category: "portions", title: "Calabresa acebolada 400g", description: "Porção deliciosa de calabresa com cebolas preparadas na medida certa.", price: "R$ 23,90" },
  { images: [`${imgBaseUrl}porcao-frios.jpeg`, `${imgBaseUrl}porcao-frios2.jpeg`], category: "portions", title: "Porção de frios 500g", description: "Porção de frio com azeite e limão.", price: "R$ 39,90" },
  { images: [`${imgBaseUrl}porcao-batata.jpeg`, `${imgBaseUrl}porcao-batata2.jpeg`], category: "portions", title: "Porção de fritas 500g", description: "Porção de batata frita, serve 2 a 3 pessoas.", price: "R$ 30,90", featured: true },
  { images: [`${imgBaseUrl}porcao-tilapia.jpeg`], category: "portions", title: "Porção de tilápia", description: "Porção de tilápia com limão.", price: "R$ 27,90" },
  { images: [`${imgBaseUrl}coca-cola.jpeg`], category: "drinks", title: "Coca-Cola 2L", description: "Refrigerante sabor cola, gelado.", price: "R$ 5,00" },
  { images: [`${imgBaseUrl}fanta-laranja.jpeg`], category: "drinks", title: "Fanta Laranja 350ml", description: "Refrigerante sabor laranja.", price: "R$ 5,00" },
  { images: [`${imgBaseUrl}guarana-lata.jpeg`], category: "drinks", title: "Guaraná 350ml", description: "Refrigerante sabor guaraná.", price: "R$ 5,00" },
  { images: [`${imgBaseUrl}sprite-lata.jpeg`], category: "drinks", title: "Sprite 350ml", description: "Refrigerante sabor limão.", price: "R$ 5,00" },
  { images: [`${imgBaseUrl}schweppescitrus-lata.jpeg`], category: "drinks", title: "Schweppes Citrus 350ml", description: "Bebida sabor citrus.", price: "R$ 5,00" },
  { images: [`${imgBaseUrl}marlboro.jpeg`], category: "cigar", title: "Marlboro Vermelho", description: "Cigarro Marlboro tradicional.", price: "R$ 10,00" },
  { images: [`${imgBaseUrl}vinho-salton.jpeg`], category: "vine", title: "Vinho Salton 900ml", description: "Elaborado com uvas selecionadas da Campanha Gaúcha.", price: "R$ 10,00" },
  { images: [`${imgBaseUrl}vinho-toroloco.jpeg`], category: "vine", title: "Vinho Toro Loco 900ml", description: "Vinho com uvas colhidas à mão em Utiel-Requena, Espanha.", price: "R$ 10,00" },
  { images: [`${imgBaseUrl}pudim.jpeg`], category: "dessert", title: "Pudim de Doce de Leite", description: "Pudim cremoso de doce de leite.", price: "R$ 6,00" },
  { images: [`${imgBaseUrl}bolo-taca.jpeg`], category: "dessert", title: "Bolo na Taça", description: "Bolo com recheio de leite ninho.", price: "R$ 15,00" },
  { images: [`${imgBaseUrl}arroz-branco.jpeg`], category: "additional", title: "Arroz Branco 350g", description: "Arroz branco simples, soltinho.", price: "R$ 5,00" },
  { images: [`${imgBaseUrl}arroz-temperado.jpeg`], category: "additional", title: "Arroz Temperado 700g", description: "Arroz temperado com azeitonas, frango, bacon e ervilhas.", price: "R$ 10,00" },
  { images: [`${imgBaseUrl}salada.jpeg`], category: "additional", title: "Mix de Salada", description: "Alface, tomate, agrião, cebola e limão.", price: "R$ 8,00" },
  { images: [`${imgBaseUrl}farofa-temperada.jpeg`], category: "additional", title: "Farofa Temperada", description: "Farofa com bacon e especiarias da casa.", price: "R$ 7,00" },
  { images: [`${imgBaseUrl}gelo.jpeg`], category: "ice", title: "Gelo 2kg", description: "Gelo em cubos.", price: "R$ 10,00" },
];

const Catalog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("portions");

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const matchSearch = p.title.toLowerCase().includes(searchValue.toLowerCase());
        const matchCat = selectedCategory ? p.category === selectedCategory : true;
        return matchSearch && matchCat;
      }),
    [searchValue, selectedCategory]
  );

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleCategory = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        px: { xs: 2.5, md: 6, lg: 12 },
        background:
          "radial-gradient(ellipse at top, rgba(232,184,109,0.06) 0%, transparent 50%), #0d0907",
      }}
    >
      <Stack
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        alignItems="center"
        textAlign="center"
        spacing={2}
        sx={{ mb: 6 }}
      >
        <Typography sx={{ color: "#e8b86d", letterSpacing: ".25em", textTransform: "uppercase", fontSize: 13, fontWeight: 600 }}>
          Nosso cardápio
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: { xs: 38, md: 60 },
            lineHeight: 1.05,
          }}
        >
          Sabores que <Box component="span" className="text-gradient-gold">conquistam</Box>
        </Typography>
        <Typography sx={{ color: "rgba(245,235,224,0.65)", maxWidth: 600 }}>
          Explore as categorias e descubra a sua porção favorita. Peça pelo WhatsApp em um clique.
        </Typography>

        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", pt: 2 }}>
          <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Buscar item do cardápio…" />
        </Box>
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <MenuBar selectedCategory={selectedCategory} onCategoryChange={handleCategory} />
      </Box>

      {filtered.length === 0 ? (
        <Typography textAlign="center" sx={{ color: "rgba(245,235,224,0.6)", py: 8 }}>
          Nenhum item encontrado para a sua busca.
        </Typography>
      ) : isMobile ? (
        <HorizontalProductList products={filtered} />
      ) : (
        <>
          <Grid container spacing={3} alignItems="stretch">
            {paginated.map((p, i) => (
              <Grid key={`${selectedCategory}-${p.title}-${i}`} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard {...p} />
              </Grid>
            ))}
          </Grid>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      )}
    </Box>
  );
};

export default Catalog;
