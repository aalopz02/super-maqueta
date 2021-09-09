
export class DeviceModel {

    nombre : string | undefined;
    estado: number | undefined;

    public constructor(init?: Partial<DeviceModel>) {
        Object.assign(this, init);
    }
    
}