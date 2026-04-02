import type { Location } from "../types/location";
import { FeatureVote } from "./FeatureVote";

type Props = {
  location: Location;
  onClose: () => void;
};

export function LocationDrawer({ location, onClose }: Props) {
  return (
    <div className="drawer">
      <h3>{location.name}</h3>

      <FeatureVote
        label="Changing Table"
        value={location.hasChangingTable}
        locationId={location.id}
      />

      <FeatureVote
        label="Accessible Stall"
        value={location.hasAccessibleStall}
        locationId={location.id}
      />

      <button onClick={onClose}>Close</button>
    </div>
  );
}