import {User} from "./user";
import { Observable } from "rxjs/Rx";
export interface IUserService {
    getUsers(): Observable<User[]>;
}