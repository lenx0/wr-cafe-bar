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
        <Box margin={{ xs: '10px', sm: '20px' }} backgroundColor="#ffffff">
            <AppBar position="static" color="default" sx={{ borderRadius: '8px' }}>
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
                        alignItems: 'center',
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#ffffff',
                        },
                        '& .MuiTab-root': {
                            minWidth: 120, // Adjust minWidth if needed
                            color: '#000000',
                            textTransform: 'none',
                            fontSize: { xs: '0.75rem', sm: '1rem' },
                            '&.Mui-selected': {
                                backgroundColor: '#685340',
                                color: '#ffffff',
                            },
                        },
                        '& .MuiTabs-scrollableX': {
                            overflowX: 'auto',
                        },
                    }}
                >
                    {menuItems.map((item, index) => (
                        <Tab key={index} label={item} style={{ flexGrow: 1 }} />
                    ))}
                </Tabs>
            </AppBar>
        </Box>
    );
};

export default MenuBar;
