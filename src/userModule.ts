import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserRoutes } from "./userRoutes";
import { Users } from "./users";
import { CreateUser } from "./createUser";
import { EditUser } from "./editUser";
import { Layout } from "./layout";
import { UserService } from "./userService";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        UserRoutes
    ],
    declarations: [Users, CreateUser, EditUser, Layout],
    bootstrap: [Layout],
    providers: [UserService]
})

export class UserModule { }