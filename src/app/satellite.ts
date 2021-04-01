export class Satellite {
    // why are keys in different order than parameters? ew.
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(
        name: string,
        type: string,
        launchDate: string,
        orbitType: string,
        operational: boolean
    ) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
}