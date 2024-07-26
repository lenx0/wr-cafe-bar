import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
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
          color: 'white',  // Cor do texto
          '& fieldset': {
            borderColor: 'white',  // Cor da borda padrão
          },
          '&:hover fieldset': {
            borderColor: 'white',  // Cor da borda ao passar o mouse
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',  // Cor da borda ao focar
          },
        },
        '& .MuiInputAdornment-root': {
          color: 'white',  // Cor do ícone
        },
        '& .MuiInputBase-input': {
          color: 'white',  // Cor do texto dentro da barra de pesquisa
        },
      }}
    />
  );
};

export default SearchBar;
