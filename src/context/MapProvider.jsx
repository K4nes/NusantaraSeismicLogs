import { useState } from "react";
import { MapContext } from "./MapContext";

export default function MapProvider({ children }) {
  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <MapContext.Provider value={{ activeMarker, setActiveMarker }}>
      {children}
    </MapContext.Provider>
  );
}