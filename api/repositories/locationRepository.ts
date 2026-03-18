import { AppDataSource } from "../db/data-source";

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
}