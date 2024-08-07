import React from 'react';
import { TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <Box>
      <TextField
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            color: 'white',
            '& fieldset': {
              borderColor: '#da5c5d',
            },
            '&:hover fieldset': {
              borderColor: '#da5c5d',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#da5c5d',
            },
          },
          '& .MuiInputAdornment-root': {
            color: '#da5c5d',
          },
          '& .MuiInputBase-input': {
            color: '#da5c5d',
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
