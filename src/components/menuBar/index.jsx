import React from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography, Box } from '@mui/material';

const menuItems = [
    'PORÇÕES', 'REFRI LATA', 'CIGARRO', 'VINHOS', 'SOBREMESAS', 'GELO',
    'ASSADOS', 'ADICIONAIS', 'AMENDOIN', 'DOCES', 'GARRAFAS DESTILADOS',
    'COMBOS', 'BEBIDAS EM GERAL', 'ACOMPANHAMENTOS', 'LANCHES', 'BALAS',
    'DRINKS', 'CERVEJAS', 'OUTRAS'
];

const MenuBar = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box margin='20px 0 20px 0'>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs"
                    textColor="inherit"
                    indicatorColor="primary"
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#ffffff',
                        },
                        '& .MuiTab-root': {
                            color: '#000000',
                            textTransform: 'none',
                            fontSize: '1rem',
                            '&.Mui-selected': {
                                backgroundColor: '#da5c5d',
                                color: '#ffffff',
                            },
                        },
                    }}
                >
                    {menuItems.map((item, index) => (
                        <Tab key={index} label={item} />
                    ))}
                </Tabs>
            </AppBar>
        </Box>
    );
};

export default MenuBar;
