import { Component } from "@angular/core";
import { UserService } from "./userService";
import { User } from "./user";

@Component({
    templateUrl: "src/createUser.html"
})
export class CreateUser { 
    public user = new User();

    constructor(private userService: UserService) { }
    
    private addUser():void {
        this.userService.addUser(this.user).subscribe();
    }

    public onSubmitClicked(user: any) {
        user = this.user;
        this.addUser();
        console.log("Successfuly", user);
    }
}