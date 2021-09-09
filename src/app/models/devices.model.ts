import { DeviceModel } from "./device.model";

export class DevicesModel {

    puertas : DeviceModel[] | undefined;
    luces: DeviceModel[] | undefined;

    public constructor(init?: Partial<DevicesModel>) {
        Object.assign(this, init);
    }
    
}