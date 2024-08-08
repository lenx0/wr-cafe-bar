import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

const initialPosition = {
    lat: -23.4117287,
    lng: -51.9552946,
};

export default function OrderLocation() {
    const [address] = useState({
        position: initialPosition,
        label: "Meu Comércio",
    });

    return (
        <Box 
            padding={{ xs: '0 10px', sm: '0 20px', md: '0 40px', lg: '0 60px', xl: '0 200px' }} 
            backgroundColor="#dadadac3"
        >
            <Box padding={5}>
                <MapContainer
                    center={address.position}
                    zoom={13}
                    scrollWheelZoom
                    style={{ height: "400px", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>{address.label}</Popup>
                    </Marker>
                </MapContainer>
            </Box>
        </Box>
    );
}
