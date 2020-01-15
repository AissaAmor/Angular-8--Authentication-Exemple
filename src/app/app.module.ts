import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from "angular-bootstrap-md";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeComponent } from "./Component/employe/employe.component";
import { SocieteComponent } from "./Component/societe/societe.component";
import { LoginComponent } from "./Component/login/login.component";
import { LogoutComponent } from "./Component/logout/logout.component";
import { HeaderComponent } from "./Component/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    SocieteComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
