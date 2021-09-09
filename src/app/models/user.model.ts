
export class UserModel {

    user: string | undefined;
    password: string | undefined;

    public constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
    
}