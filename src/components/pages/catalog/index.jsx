import { Box, CssBaseline, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import ProductCard from '../../productCard'
import MenuBar from '../../menuBar'
import { useState } from 'react'
import SearchBar from './searchBar'
import HorizontalProductList from '../../catalog/horizontalProductList'
import Pagination from '../../pagination'

const Catalog = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [currentPage, setCurrentPage] = useState(1);

    const imgBaseUrl = "/products/"



    const products = [
        {
            images: [`${imgBaseUrl}frangopassarinho.jpeg`],
            category: "portions",
            title: "Frango a passarinho",
            description: "Porção de frango a passarinho serve até 3 pessoas",
            price: "R$19,90"
        },
        {
            images: [`${imgBaseUrl}picanha-com-arroz.jpeg`],
            category: "portions",
            title: "Picanha 500G",
            description: `Picanha preparada com tecnicas da casa.`,
            garnish: `Arroz a grega`,
            price: "R$120,00"
        },
        {
            images: [`${imgBaseUrl}calabresa-acebolada.jpeg`, `${imgBaseUrl}calabresa-acebolada2.jpeg`],
            category: "portions",
            title: "Calabresa acebo. 400G",
            description: "Porção deliciosa de calabresa com cebolas preparadas na medida certa",
            price: "R$23,90"
        },
        {
            images: [`${imgBaseUrl}porcao-frios.jpeg`],
            category: "portions",
            title: "Porção de frios 500G",
            description: "Porção de frio com azeite e limão",
            price: "R$39,90"
        },
        {
            images: [`${imgBaseUrl}porcao-batata.jpeg`, `${imgBaseUrl}porcao-batata2.jpeg`],
            category: "portions",
            title: "Porção de fritas 500G",
            description: "Porção de batata frita, serve 2 a 3 pessoas",
            price: "R$30,90"
        },
        {
            images: [`${imgBaseUrl}porcao-tilapia.jpeg`],
            category: "portions",
            title: "Porção de tilápia",
            description: "Porção de tilápia com limão",
            garnish: `Exemplo`,
            price: "R$27,90"
        },
        {
            images: [`${imgBaseUrl}coca-cola.jpeg`],
            category: "drinks",
            title: "Coca-Cola 2L",
            description: "Bebida sabor cola",
            price: "R$5,00"
        },
        {
            images: [`${imgBaseUrl}fanta-laranja.jpeg`],
            category: "drinks",
            title: "Fanta laranja 350ml",
            description: "Bebida sabor laranja",
            price: "R$5,00"
        },
        {
            images: [`${imgBaseUrl}guarana-lata.jpeg`],
            category: "drinks",
            title: "Guaraná 350ml",
            description: "Bebida sabor guaraná",
            price: "R$5,00"
        },
        {
            images: [`${imgBaseUrl}sprite-lata.jpeg`],
            category: "drinks",
            title: "Sprite 350ml",
            description: "Bebida sabor sprite",
            price: "R$5,00"
        },
        {
            images: [`${imgBaseUrl}schweppescitrus-lata.jpeg`],
            category: "drinks",
            title: "Schweppes Citrus 350ml",
            description: "Bebida sabor Citrus",
            price: "R$5,00"
        },
        {
            images: [`${imgBaseUrl}marlboro.jpeg`],
            category: "cigar",
            title: "Cigarro Marlboro vermelho",
            description: "",
            price: "R$10,00"
        },
        {
            images: [`${imgBaseUrl}vinho-salton.jpeg`],
            category: "vine",
            title: "Vinho Salton 900ML",
            description: "Elaborado apenas com uvas selecionadas, ainda nos vinhedos, na região da Campanha Gaúcha",
            price: "R$10,00"
        },
        {
            images: [`${imgBaseUrl}vinho-toroloco.jpeg`],
            category: "vine",
            title: "Vinho Toro Loco 900ML",
            description: "Vinho com uvas colhidas principalmente à mão por 3.000 famílias de Utiel-Requena.",
            price: "R$10,00"
        },
        {
            images: [`${imgBaseUrl}pudim.jpeg`],
            category: "dessert",
            title: "Pudim Doce de Leite",
            description: "Pudim de doce de leite",
            price: "R$6,00"
        },
        {
            images: [`${imgBaseUrl}bolo-taca.jpeg`],
            category: "dessert",
            title: "Bolo na taça",
            description: "Bolo com recheio de leite ninho ",
            price: "R$15,00"
        },
        {
            images: [`${imgBaseUrl}arroz-branco.jpeg`],
            category: "additional",
            title: "Arroz Branco 350G",
            description: "Arroz branco simples",
            price: "R$5,00"
        },
        {
            images: [`${imgBaseUrl}arroz-temperado.jpeg`],
            category: "additional",
            title: "Arroz Temperado 700G",
            description: "Porção de arroz temperado com azeitonas, pedaços de frango, bacon e ervilhas",
            price: "R$10,00"
        },
        {
            images: [`${imgBaseUrl}salada.jpeg`],
            category: "additional",
            title: "Mix de salada",
            description: "Alface, tomate, agrião, cebola e limão  ",
            price: "R$8,00"
        },
        {
            images: [`${imgBaseUrl}farofa-temperada.jpeg`],
            category: "additional",
            title: "Farofa Brasileira temperada",
            description: "Farofa temperada com bacon e especiarias da casa",
            price: "R$7,00"
        },
        {
            images: [`${imgBaseUrl}gelo.jpeg`],
            category: "ice",
            title: "Gelo 2KG",
            description: "Gelo em cubos",
            price: "R$10,00"
        },
    ]
    const [searchValue, setSearchValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('portions');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.title.toLowerCase().includes(searchValue.toLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });

    const itemsPerPage = 8;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Box>
            {/* <Box backgroundColor="#ffffff" padding={{ xs: "20px", md: "200px 200px 0 200px" }} > */}
            <Box padding={{ xs: "20px", md: "100px 40px 0 40px" }} >
                <Typography fontSize={{ xs: 30, md: 50 }} fontWeight="bold" color="#ffffff">Cardápio</Typography>
                <SearchBar value={searchValue} onChange={handleSearchChange} placeholder="Busque um item" />
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <MenuBar selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
                    </Grid>
                </Grid>
                <CssBaseline />

                {isMobile ? (
                    <Grid container>
                        {/* 100vh para não quebrar o item e distorcer a imagem */}
                        <Grid item xs={12} sx={{ minHeight: '100vh' }}>
                            <HorizontalProductList products={filteredProducts} />
                        </Grid>
                    </Grid>
                ) : (
                    <>
                        {/* <Grid container spacing={2} justifyContent="start" padding={2}> verificar para corrigir o problema da imagem pulando de tamanho */}
                        <Grid container spacing={2} justifyContent="start" padding={2} sx={{ minWidth: '80vw', minHeight: '100vh' }}>
                            {paginatedProducts.map((product, index) => (
                                <Grid item key={index} xs={12} sm={6} md={6} lg={3} xl={3}>
                                    <ProductCard
                                        images={product.images}
                                        category={product.category}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Box pb={5}>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </Box>
                    </>
                )}
            </Box>
        </Box>

    )
}

export default Catalog