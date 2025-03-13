'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

const locations = [
  { lat: 26.50, lng: 40, name: 'Al Jadid',zoom:6 },
  { lat: 24, lng: 42.71545580967995, name: 'Al Jadid2', zoom:5 },
  { lat: 47, lng: -0.7123250595417063, name: 'SaintNazaire', zoom:7 },
  { lat: 47, lng: 3.6686160721654026
    , name: 'Lyon', zoom:7 },
  { lat: 25, lng: 22.718970799675564, name: 'Global', zoom:3 },
];

function MapUpdater({ position, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (map && map.flyTo) {
      map.flyTo(position, zoom, { animate: false });
    }
  }, [position, map]);
  return null;
}

export default function MapComponent({ locationIndex }) {
  const index = locationIndex % locations.length;
  const position = [locations[index].lat, locations[index].lng];
  const zoom = [locations[index].zoom];


  return (
    <div className='absolute z-0'>
      <MapContainer center={position} zoom={5} style={{ height: "926px", width: "428px", position: "absolute" }}>
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png" />
        <MapUpdater position={position} zoom={zoom} />
      </MapContainer>
    </div>
  );
}

// <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />