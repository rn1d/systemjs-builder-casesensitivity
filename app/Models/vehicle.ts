export class Vehicle {
    registrationNr: string;

    constructor(src: any){
        this.registrationNr = src && src.registrationNr;
    }
}