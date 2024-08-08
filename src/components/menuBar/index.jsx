import React from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';

// const menuItems = [
//     'PORÇÕES', 'REFRI LATA', 'CIGARRO', 'VINHOS', 'SOBREMESAS', 'GELO',
//     'ASSADOS', 'ADICIONAIS', 'AMENDOIN', 'DOCES', 'GARRAFAS DESTILADOS',
//     'COMBOS', 'BEBIDAS EM GERAL', 'ACOMPANHAMENTOS', 'LANCHES', 'BALAS',
//     'DRINKS', 'CERVEJAS', 'OUTRAS'
// ];
const menuItems = [
    'TUDO', 'PORÇÕES', 'REFRI LATA', 'CIGARRO', 'VINHOS', 'SOBREMESAS', 'GELO', 'ACOMPANHAMENTOS',
];

const categories = {
    'PORÇÕES': 'portions',
    'REFRI LATA': 'drinks',
    'CIGARRO': 'cigar',
    'VINHOS': 'vine',
    'SOBREMESAS': 'dessert',
    'GELO': 'ice',
    'ACOMPANHAMENTOS': 'additional'
};

const MenuBar = ({ onCategoryChange }) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
        onCategoryChange(categories[menuItems[newValue]])
    };

    return (
        <Box margin='20px' backgroundColor="#373737">
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
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#ffffff',
                        },
                        '& .MuiTab-root': {
                            width: '100%',
                            color: '#000000',
                            textTransform: 'none',
                            fontSize: '1rem',
                            '&.Mui-selected': {
                                backgroundColor: '#685340',
                                color: '#ffffff',
                            },
                        },
                    }}
                >
                    {menuItems.map((item, index) => (
                        <Tab key={index} label={item} style={{ display: "flex" }} />
                    ))}
                </Tabs>
            </AppBar>
        </Box>
    );
};

export default MenuBar;
