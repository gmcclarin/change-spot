export interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  address?: string;
  hasChangingTable: boolean;
  hasAccessibleStall: boolean;
}