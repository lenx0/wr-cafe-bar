import { useState } from "react";
import { Box, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from '@mui/system';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "/logos/logo.png";

const HeaderMobile = ({ scrollToSection }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const SocialIcon = styled('a')({
        color: '#fff',
        margin: '0 10px',
        fontSize: '24px',
        textDecoration: 'none',
        '&:hover': {
            color: '#da5c5d',
        },
    });

    const toggleDrawer = (value) => {
        scrollToSection(value)
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <>
            <IconButton onClick={toggleDrawer} color="inherit">
                <MenuIcon sx={{ fontSize: "50px" }} />
            </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250 }}>
                    <Box display="flex" alignItems="center" justifyContent="center" mt={2} mb={2}>
                        <img src={Logo} alt="Logo" width={200} />
                    </Box>
                    <List>
                        <ListItem button key="Home" sx={{
                            mb: 2,
                        }} onClick={() => toggleDrawer("catalog")}>
                            <ListItemIcon>
                                <i class="fa fa-cutlery" aria-hidden="true"></i>
                            </ListItemIcon>
                            <ListItemText
                                primary="Cardápio"
                                primaryTypographyProps={{ fontSize: "18px" }}

                            />
                        </ListItem>
                        <ListItem button key="Whatsapp" sx={{
                            mb: 2,
                        }} onClick={() => toggleDrawer("whatsapp")}>
                            <ListItemIcon>
                                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                            </ListItemIcon>
                            <ListItemText
                                primary="Whatsapp"
                                primaryTypographyProps={{ fontSize: "18px" }}
                            />
                        </ListItem>
                        <ListItem button key="Location" sx={{
                            mb: 2,
                        }} onClick={() => toggleDrawer("map")}>
                            <ListItemIcon>
                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                            </ListItemIcon>
                            <ListItemText
                                primary="Localização"
                                primaryTypographyProps={{ fontSize: "18px" }}
                            />
                        </ListItem>
                        <ListItem button key="Catalog" sx={{
                            mb: 2,
                        }} onClick={() => toggleDrawer("catalog")}>
                            <ListItemIcon>
                                <i class="fa fa-camera-retro" aria-hidden="true"></i>
                            </ListItemIcon>
                            <ListItemText
                                primary="Galeria"
                                primaryTypographyProps={{ fontSize: "18px" }}
                            />
                        </ListItem>
                        <ListItem button key="Take now" sx={{
                        }}>
                            <ListItemIcon>
                                <i class="fa fa-motorcycle" aria-hidden="true" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Peça já"
                                primaryTypographyProps={{ fontSize: "18px" }}
                            />
                        </ListItem>
                    </List>
                    <Box display="flex" mt={2} justifyContent="center" p={2} backgroundColor="#685340">
                        <Box>
                            <SocialIcon href="https://facebook.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer" className="fab fa-facebook" aria-label="Facebook" />
                        </Box>
                        <Box>
                            <SocialIcon href="https://instagram.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer" className="fab fa-instagram" aria-label="Instagram" />
                        </Box>
                        <Box>
                            <SocialIcon href="https://twitter.com" style={{ color: "white" }} target="_blank" rel="noopener noreferrer" className="fab fa-twitter" aria-label="Twitter" />
                        </Box>
                    </Box>
                </Box>
            </Drawer>
        </>
    )
}

export default HeaderMobile