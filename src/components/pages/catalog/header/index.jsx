import { Box, Button, Input } from "@mui/material";
import SearchBar from "../searchBar";
import Cart from "../../../cart";

const Header = ({ searchValue, onSearchChange }) => {
    return (
        <Box display="flex" width="100%" backgroundColor="#685340" height={80} textAlign="center" justifyContent="space-between" alignItems="center" padding="0 20px">
            <Box flex="1" display="flex" justifyContent="center">
                <Button variant="contained">Página inicial</Button>
                <Box width="50%">
                    <SearchBar value={searchValue} onChange={onSearchChange} placeholder="busque um produto" />
                </Box>
            </Box>
        </Box>
    )
}

export default Header;