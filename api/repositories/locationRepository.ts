import { AppDataSource } from "../db/data-source";
import { Location } from "../entities/Location";


export class LocationRepository {
    private typeOrm;
    constructor() {
        this.typeOrm = AppDataSource.getRepository(Location);
    }

    async find() {
        try {
            return await this.typeOrm.find();
        } catch (error) {
            throw new Error("Error occurred while fetching locations");
        }
    }

    async create(locationData: Partial<Location>): Promise<Location> {
        try {
            const location = this.typeOrm.create(locationData);
            return await this.typeOrm.save(location);
        } catch (error) {
            throw new Error("Error occurred while creating location");
        }
    }
}