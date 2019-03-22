import { NgModule } from "@angular/core";
import { Users } from "./users";
import { CreateUser } from "./createUser";
import { EditUser } from "./editUser";
import { Routes, RouterModule } from "@angular/router";

let routes: Routes  = [
    {path: "", redirectTo: "users", pathMatch: 'full'},
    {path: 'addNewUser', component: CreateUser},
    {path: 'editUser/:id', component: EditUser},
    {path: 'users', component: Users}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class UserRoutes { }