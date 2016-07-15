import {Vehicle} from "./models/vehicle"; // change to "./Models/vehicle" to correctly generate bundles
import {RoutePlanner} from "./routeplanner"; // change to "./routePlanner" to correctly generate bundles

const vehicle = new Vehicle({registrationNr: "LV3913"})
var planner = new RoutePlanner();

planner.plan(vehicle);
