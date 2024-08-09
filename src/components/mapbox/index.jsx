import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { Box } from "@mui/material";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Override dos ícones padrão do Leaflet
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerRetina from 'leaflet/dist/images/marker-icon-2x.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconRetinaUrl: markerRetina,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

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
            backgroundColor="#f1edede6"
            position="relative"
        >
            <Box padding={2}>
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
