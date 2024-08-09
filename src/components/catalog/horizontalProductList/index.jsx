import React, { useState } from 'react';
import { Box, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';
import Pagination from '../../pagination';

const HorizontalProductList = ({ products }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const itemsPerPage = 4; // Número de produtos por página
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const paginatedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (!isMobile) return null;

    return (
        <Box padding={2}>
            {paginatedProducts.map((product) => (
                <Box
                    key={product.title}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: 1,
                        borderBottom: '1px solid #ddd',
                        mb: 2,
                        height: '15vh'
                    }}
                >
                    <Box>
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            style={{
                                width: '80px',
                                height: '80px',
                                objectFit: product.category === 'vine' ? 'contain' : 'cover',
                                borderRadius: 10,
                                marginRight: '16px'
                            }}
                        />
                    </Box>
                    <Box color="#fff">
                        <Typography variant="h6" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="body1">
                            {product.price}
                        </Typography>
                        <Typography variant="body2">
                            {product.description}
                        </Typography>
                    </Box>
                </Box>
            ))}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </Box>
    );
};

export default HorizontalProductList;
