import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
              <SearchIcon sx={{ color: "#e8b86d" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          maxWidth: 520,
          "& .MuiOutlinedInput-root": {
            color: "#f5ebe0",
            borderRadius: 999,
            background: "rgba(26,18,11,0.6)",
            backdropFilter: "blur(10px)",
            transition: "all .35s ease",
            "& fieldset": { borderColor: "rgba(232,184,109,0.25)" },
            "&:hover fieldset": { borderColor: "rgba(232,184,109,0.5)" },
            "&.Mui-focused fieldset": { borderColor: "#e8b86d", borderWidth: 1.5 },
            "& input": { py: 1.6 },
            "& input::placeholder": { color: "rgba(245,235,224,0.45)", opacity: 1 },
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
