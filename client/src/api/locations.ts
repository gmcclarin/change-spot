import {api} from "./lib";
import { type Location } from "../types/location";
import { useQuery } from "@tanstack/react-query";

async function getLocations(): Promise<Location[]> {
  const { data } = await api.get("/locations");
  return data;
}

export const useGetLocations = () => {
    return useQuery({
        queryFn: getLocations,
        queryKey: ["locations"]
    })
};