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
    private idDeleted: number;

    constructor(private router: Router, private userService: UserService) {
    }

    public ngOnInit(): void {
        this.getUsers();
    }

    private getUsers(): void {
        this.users = this.userService.getUsers();
    }

    private deleteUser(): void {
        this.userService.deleteUser(this.idDeleted).subscribe();
    }

    public onEditClicked(userId: string) {
        this.router.navigate(["editUser", userId]);
    }

    public onDeleteClicked(userId: number) {
        this.idDeleted = userId;
        this.deleteUser();
        console.log("Delete Successfuly");
    }
}