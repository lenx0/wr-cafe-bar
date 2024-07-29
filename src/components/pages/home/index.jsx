import { Container, CssBaseline, Grid } from '@mui/material'
import ProductCard from '../../productCard'
import MenuBar from '../../menuBar'
import { useState } from 'react';

const Home = () => {
    const [cartItems, setCartItems] = useState([]);

    const imgBaseUrl = "/products/"

    const products = [
        {
            images: [`${imgBaseUrl}frangopassarinho.jpeg`],
            title: "Frango a passarinho",
            description: "Porção de frango a passarinho serve até 3 pessoas",
            garnish: `Exemplo`,
            price: "R$19,90"
        },
        {
            images: [`${imgBaseUrl}picanha-com-arroz.jpeg`],
            title: "Picanha à moda do chef-500G",
            description: `Picanha preparada com tecnicas da casa.`,
            garnish: `Arroz a grega`,
            price: "R$120,00"
        },
        {
            images: [`${imgBaseUrl}calabresa-acebolada.jpeg`, `${imgBaseUrl}calabresa-acebolada2.jpeg`],
            title: "Calabresa acebolada 400G",
            description: "Porção deliciosa de calabresa com cebolas preparadas na medida certa",
            garnish: `Exemplo`,
            price: "R$23,90"
        },
    ]

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.title === product.title);
            if (existingItem) {
                return prevItems.map(item =>
                    item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    console.log("cart Items", cartItems)

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
                                onAddToCart={() => handleAddToCart(product)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>

    )
}

export default Home