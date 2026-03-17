import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [-77.6088, 43.1566],
      zoom: 12
    });

    return () => map.remove();
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{ height: "500px", width: "100%" }}
    />
  );
}