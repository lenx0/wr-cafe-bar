import { Box } from '@mui/material'
import ProductCard from '../../productCard'
import MenuBar from '../../menuBar'

const Home = () => {
    return (
        <Box>
            <MenuBar />
            <Box display="flex" flexWrap="wrap" justifyContent="center">
                <ProductCard
                    image="/products/frangopassarinho.jpeg"
                    title="Frango a passarinho"
                    description="uma porção de frango a passarinho de 600g"
                    price="R$19,90"
                />
                <ProductCard
                    image="/products/picanha-com-arroz.jpeg"
                    title="Picanha à moda do chef-500G"
                    description="Picanha à Moda do Chef - 
                    500GR Uma Celebração da Carne de 
                    Qualidade Serve até 2 Pessoas 
                    Prepare-se para uma experiência 
                    gastronômica de classe mundial com a nossa 
                    Picanha à Moda do Chef. Este prato é a expressão 
                    suprema da qualidade e do sabor da carne, preparado de 
                    forma única pelo nosso chef mestre. Nossa picanha é cuidadosamente 
                    selecionada, garantindo a maciez e o sabor incomparáveis que fazem 
                    dela um corte de carne tão apreciado."
                    price="R$120,00"
                />
                <ProductCard
                    image="/products/frangopassarinho.jpeg"
                    title="Frango a passarinho"
                    description="uma porção de frango a passarinho de 600g"
                    price="R$19,90"
                />
                <ProductCard
                    image="/products/frangopassarinho.jpeg"
                    title="Frango a passarinho"
                    description="uma porção de frango a passarinho de 600g"
                    price="R$19,90"
                />

                <ProductCard
                    image="/products/frangopassarinho.jpeg"
                    title="Frango a passarinho"
                    description="uma porção de frango a passarinho de 600g"
                    price="R$19,90"
                />
                <ProductCard
                    image="/products/frangopassarinho.jpeg"
                    title="Frango a passarinho"
                    description="uma porção de frango a passarinho de 600g"
                    price="R$19,90"
                />
                <ProductCard
                    image="/products/frangopassarinho.jpeg"
                    title="Frango a passarinho"
                    description="uma porção de frango a passarinho de 600g"
                    price="R$19,90"
                />
                <ProductCard
                    image="/products/frangopassarinho.jpeg"
                    title="Frango a passarinho"
                    description="uma porção de frango a passarinho de 600g"
                    price="R$19,90"
                />
                <ProductCard
                    image="/products/frangopassarinho.jpeg"
                    title="Frango a passarinho"
                    description="uma porção de frango a passarinho de 600g"
                    price="R$19,90"
                />

                <ProductCard
                    image="/products/frangopassarinho.jpeg"
                    title="Frango a passarinho"
                    description="uma porção de frango a passarinho de 600g"
                    price="R$19,90"
                />
            </Box>
        </Box>
    )
}

export default Home