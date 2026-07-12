import { createContext, useContext } from "react";

export const MapContext = createContext();

export function useMapContext() {
  return useContext(MapContext);
}