import { useVoteOnFeature } from "../api/votes";

type FeatureKey = "changing_table" | "accessible_stall";


type Props = {
  label: string;
  feature: FeatureKey;
  value: boolean;
  locationId: string;
};

export function FeatureVote({ label, feature, value, locationId }: Props) {
  const {mutateAsync: postVote} = useVoteOnFeature();

  return (
    <div>
      <span>{label}</span>

      <button
        onClick={() =>
          postVote({
            locationId,
            feature,
            vote: true,
          })
        }

      >
        👍
      </button>

      <button
        onClick={() =>
          postVote({
            locationId,
            feature,
            vote: false,
          })
        }
      >
        👎
      </button>

      <span>{value ? "Available" : "Not Available"}</span>
    </div>
  );
}