import { LocationRepository } from "../repositories/locationRepository";

export class LocationService {
  private locationRepo = new LocationRepository();

  async createLocation(data: any) {
    return this.locationRepo.create(data);
  }

  async getAllLocations() {
    return this.locationRepo.find();
  }

  async updateLocation(id: number, data: any) {
    return this.locationRepo.update(id, data);
  } 
}