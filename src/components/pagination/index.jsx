import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" mt={4} color="#fff">
            <Button
                variant="contained"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                sx={{
                    backgroundColor: "#4d3c2b",
                    '&:hover': {
                      backgroundColor: "#33271c"
                    }
                  }}
            >
                Anterior
            </Button>
            <Typography mx={2}>{`Página ${currentPage} de ${totalPages}`}</Typography>
            <Button
                variant="contained"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                sx={{
                    backgroundColor: "#4d3c2b",
                    '&:hover': {
                      backgroundColor: "#33271c"
                    }
                  }}
            >
                Próximo
            </Button>
        </Box>
    );
};

export default Pagination;
