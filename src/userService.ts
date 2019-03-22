import { IUserService } from "./iuserService";
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers} from "@angular/http";
import { Observable } from "rxjs/Rx";
import { User } from "./user"; 

@Injectable()
export class UserService implements IUserService {
    /*public getUser(): Array<any> {
        let users: Array<any> = [
            {id: 1, firstName: "Eri", lastName: "Ca", userName: "EriCa"},
            {id: 2, firstName: "John", lastName: "Son", userName: "JohnSon"},
            {id: 3, firstName: "Laure", lastName: "Lu", userName: "LaureLu"}
        ]
        return users;
    }*/

    private userUrl: string = 'http://localhost:89/api/users';
    constructor(private http: Http) { }

    public getUser(): Observable<User[]> {
        let headers = new Headers ({'Accept': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let users = this.http.get(this.userUrl, options).map(this.extractData).catch(this.handelError);
        return users;
    }
    private handelError(error: Response | any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    private extractData(res: Response) {
        let body = res.json();
        return body;
    }
} 