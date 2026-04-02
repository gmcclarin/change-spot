import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./lib";

async function postVote({
      locationId,
      feature,
      vote,
    }: {
      locationId: string;
      feature: string;
      vote: boolean;
    }) {
      const { data } = await api.post("/api/votes", {
        body: JSON.stringify({ locationId, feature, vote }),
      });

      if (!data) throw new Error("Failed to vote");

      return data;
    };

export function useVoteOnFeature() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postVote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["locations"] });
    },
  });
}