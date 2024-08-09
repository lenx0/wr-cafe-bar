import React from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';

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
        setValue(newValue);
        onCategoryChange(categories[menuItems[newValue]]);
    };

    return (
        <Box margin={{ xs: '10px', sm: '20px' }} backgroundColor="#ffffff" borderRadius={2}>
            <AppBar position="static" color="default" sx={{ borderRadius: 2 }}>
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
                        borderRadius: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#e0e41f',

                        },
                        '& .MuiTab-root': {
                            minWidth: 120,
                            color: '#000000',
                            textTransform: 'none',
                            margin: 0,
                            padding: 0,
                            height: '100%',
                            fontSize: { xs: '0.75rem', sm: '1rem' },
                            '&.Mui-selected': {
                                margin: 0,
                                padding: 0,
                                backgroundColor: '#4d3b2c',
                                color: '#ffffff',
                            },
                        },
                        '& .MuiTabs-scrollableX': {
                            overflowX: 'auto',
                        },
                    }}
                >
                    {menuItems.map((item, index) => (
                        <Tab key={index} label={item} style={{ flexGrow: 1, borderRadius: 3 }} />
                    ))}
                </Tabs>
            </AppBar>
        </Box>
    );
};

export default MenuBar;
