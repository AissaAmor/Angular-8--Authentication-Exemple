import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeComponent } from "./Component/employe/employe.component";
import { LoginComponent } from "./Component/login/login.component";
import { LogoutComponent } from "./Component/logout/logout.component";
import { AuthGaurdService } from "./Services/auth-gaurd.service";

const routes: Routes = [
  {
    path: "",
    component: EmployeComponent,
    canActivate: [AuthGaurdService]
  },
  { path: "login", component: LoginComponent },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
