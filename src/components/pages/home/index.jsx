import { Box, Container, CssBaseline, Grid } from '@mui/material'
import ProductCard from '../../productCard'
import MenuBar from '../../menuBar'

const Home = () => {

    const products = [
        {
            images: ["/products/frangopassarinho.jpeg"],
            title: "Frango a passarinho",
            description: "Porção de frango a passarinho serve até 3 pessoas",
            garnish: `Exemplo`,
            price: "R$19,90"
        },
        {
            images: ["/products/picanha-com-arroz.jpeg"],
            title: "Picanha à moda do chef-500G",
            description: `Picanha preparada com tecnicas da casa.`,
            garnish: `Arroz a grega`,
            price: "R$120,00"
        },
        {
            images: ["/products/frangopassarinho.jpeg"],
            title: "Calabresa acebolada 400G",
            description: "Porção deliciosa de calabresa com cebolas preparadas na medida certa",
            garnish: `Exemplo`,
            price: "R$19,90"
        },
    ]

    return (
        <>
            <MenuBar />
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {products.map((product, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <ProductCard
                                images={product.images}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>

    )
}

export default Home