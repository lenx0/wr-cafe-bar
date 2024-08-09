import React from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <Box mt={5}>
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="standard"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}

        sx={{
          '& .MuiInputAdornment-root': {
            color: '#ffffff',
          },
          '& .MuiInputBase-input': {
            color: '#ffffff',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ffffff', // Cor da linha antes do foco
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#ffffff', // Cor da linha ao passar o mouse
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#e0e41f', // Cor da linha ao focar
          },
        }}

        // sx={{
        //   '& .MuiOutlinedInput-root': {
        //     color: 'white',
        //     '& fieldset': {
        //       borderColor: '#ffffff',
        //     },
        //     '&:hover fieldset': {
        //       borderColor: '#ffffff',
        //     },
        //     '&.Mui-focused fieldset': {
        //       borderColor: '#ffffff',
        //     },
        //   },
        //   '& .MuiInputAdornment-root': {
        //     color: '#ffffff',
        //   },
        //   '& .MuiInputBase-input': {
        //     color: '#ffffff',
        //   },
        // }}
      />
    </Box>
  );
};

export default SearchBar;
