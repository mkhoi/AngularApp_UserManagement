import { Component, OnInit } from "@angular/core";
import { UserService } from "./userService";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { User } from "./user";

@Component({
    selector: "users",
    templateUrl: "src/users.html",
    providers: [UserService]
})
export class Users implements OnInit{ 
    
    private users: Observable<User[]>;

    constructor(private router: Router, private userService: UserService) {
    }

    public ngOnInit(): void {
        this.getUsers();
    }

    public getUsers(): void {
        this.users = this.userService.getUsers();
    }

    public onEditClicked(userId: string) {
        this.router.navigate(["editUser", userId]);
    }
}