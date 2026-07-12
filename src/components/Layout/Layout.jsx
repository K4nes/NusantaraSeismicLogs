import { useContext, useEffect, useRef } from "react";
import { MapContext } from "../../context/MapContext";
import Map, { Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import Header from "../Header/Header";
import Sidebar from "../Aside/Sidebar";

const mapAPI = import.meta.env.VITE_MAPTILER_API;

export default function Layout() {
  const { activeMarker } = useContext(MapContext);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && activeMarker) {
      mapRef.current.flyTo({
        center: [activeMarker.lng, activeMarker.lat],
        zoom: 7,
        duration: 1500,
        essential: true
      });
    }
  }, [activeMarker]);

  return (
    <div className="h-screen w-full flex flex-col text-white overflow-hidden ">
      <Header />
      <div className="flex-1 flex flex-row gap-2 overflow-hidden p-3">
        <main className="flex-1 min-w-0 overflow-hidden relative">
            <Map
              ref={mapRef}
              initialViewState={{
                longitude: 117.277568,
                latitude: -1.045626,
                zoom: 4
              }}
              style={{ width: "100%", height: "100%" }}
              mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${mapAPI}`}
            >
              
              {activeMarker && (
                <Marker 
                  latitude={activeMarker.lat} 
                  longitude={activeMarker.lng}
                  color="red"
                />
              )}
            </Map>
        </main>
        <Sidebar />
      </div>
    </div>
  );
}