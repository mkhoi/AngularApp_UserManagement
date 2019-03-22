import { Component } from "@angular/core";
import { UserService } from "./userService";
import { Router } from "@angular/router";

@Component({
    selector: "users",
    templateUrl: "src/users.html"
})
export class Users { 
    
    private users: Array<any>;
    constructor(private router: Router, private userService: UserService) {
        this.users = userService.getUser();
    }

    public onEditClicked(userId: string) {
        this.router.navigate(["editUser", userId]);
    }
}