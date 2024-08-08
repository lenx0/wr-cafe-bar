import React from 'react';
import { Box, Typography, Stack, useMediaQuery, useTheme } from '@mui/material';

const HorizontalProductList = ({ products }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!isMobile) return null;

  return (
    <Box padding={2}>
      {products.map((product) => (
        <Box
          key={product.title}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 1,
            borderBottom: '1px solid #ddd',
            mb: 2,
          }}
        >
          <img
            src={product.images[0]}
            alt={product.name}
            style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '16px' }}
          />
          <Box>
            <Typography variant="h6" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {product.price}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalProductList;
