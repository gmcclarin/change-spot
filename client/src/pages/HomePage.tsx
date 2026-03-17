import { useGetLocations } from "../api/locations";

export default function HomePage() {
  const { data, isLoading, isError } = useGetLocations();

  if (isLoading) return <div>Loading locations...</div>;
  if (isError) return <div>Failed to load locations</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>ChangeSpot</h1>

      <h2>Nearby Changing Tables</h2>

      <ul>
        {(data ?? []).map((location) => (
          <li key={location.id}>
            <strong>{location.name}</strong> —{" "}
            {location.hasChangingTable ? "Changing table available" : "No table"}
          </li>
        ))}
      </ul>
    </div>
  );
}