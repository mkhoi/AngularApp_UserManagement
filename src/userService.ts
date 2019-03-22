import {IUserService} from "./iuserService";

export class UserService implements IUserService {
    public getUser(): Array<any> {
        let users: Array<any> = [
            {id: 1, firstName: "Eri", lastName: "Ca", userName: "EriCa"},
            {id: 2, firstName: "John", lastName: "Son", userName: "JohnSon"},
            {id: 3, firstName: "Laure", lastName: "Lu", userName: "LaureLu"}
        ]
        return users;
    }
} 