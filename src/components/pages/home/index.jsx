import { Box, Container, CssBaseline, Grid } from '@mui/material'
import ProductCard from '../../productCard'
import MenuBar from '../../menuBar'

const Home = () => {

    const products = [
        {
            images: ["/products/frangopassarinho.jpeg"],
            title: "Frango a passarinho",
            description: "uma porção de frango a passarinho de 600g",
            price: "R$19,90"
        },
        {
            images: ["/products/picanha-com-arroz.jpeg", "/products/calabresa-acebolada.jpeg"],
            title: "Picanha à moda do chef-500G",
            description: `Picanha à Moda do Chef - 
                    500GR Uma Celebração da Carne de 
                    Qualidade Serve até 2 Pessoas 
                    Prepare-se para uma experiência 
                    gastronômica de classe mundial com a nossa 
                    Picanha à Moda do Chef. Este prato é a expressão 
                    suprema da qualidade e do sabor da carne, preparado de 
                    forma única pelo nosso chef mestre. Nossa picanha é cuidadosamente 
                    selecionada, garantindo a maciez e o sabor incomparáveis que fazem 
                    dela um corte de carne tão apreciado.`,
            price: "R$120,00"
        },
        {
            images: ["/products/frangopassarinho.jpeg"],
            title: "Frango a passarinho",
            description: "uma porção de frango a passarinho de 600g",
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