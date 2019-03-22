import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "./userService";
import { User } from "./user";

@Component({
    templateUrl: "src/editUser.html"
})
export class EditUser { 
    private idSelected: number;
    private user = new User();
    constructor(private route: ActivatedRoute, private userService: UserService) {
        this.idSelected = this.route.params["value"].id;
        console.log("User selected", this.idSelected);
    }

    private updateUser(): void {
        this.userService.updateUser(this.idSelected, this.user).subscribe();
    }

    public onUpdateClicked(user: any) {
        this.user = user;
        this.updateUser();
        console.log("Update Successfuly", user);
    }
}