import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

// Defina a posição inicial e fixa
const initialPosition = {
    lat: -23.4117287,
    lng: -51.9552946,
};

// Componente OrderLocation
export default function OrderLocation() {
    // Defina o estado address com a posição inicial fixa
    const [address] = useState({
        position: initialPosition,
        label: "Meu Comércio",
    });

    return (
        <Box padding="0 200px 0 200px">
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
