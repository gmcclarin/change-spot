import { useState } from "react";
import { useGetLocations } from "../api/locations";
import Map from "../components/Map";
import { LocationDrawer } from "../components/LocationDrawer";
import type { Location } from "../types/location";

export default function HomePage() {
  const { data, isLoading, isError } = useGetLocations();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <Map
        locations={data ?? []}
        onSelectLocation={setSelectedLocation}
      />

      {selectedLocation && (
        <LocationDrawer
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}
    </div>
  );
}