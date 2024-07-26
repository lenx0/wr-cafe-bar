import { Box, Input } from "@mui/material";
import SearchBar from "../searchBar";

const Header = () => {
    return (
        <Box display="flex" backgroundColor="#da5c5d" height={80} textAlign="center" justifyContent="center" alignItems="center">
            <Box width={400}>
                <SearchBar placeholder="busque um produto" />
            </Box>
        </Box>
    )
}

export default Header;