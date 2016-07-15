import * as moment from "moment";

import {Vehicle} from "./Models/vehicle";

export class RoutePlanner {
    public plan(vehicle: Vehicle) {
        console.log(`Route planned for vehicle ${vehicle.registrationNr} at ${moment().format("LTS")}`);
    }
}