import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(object) {
    console.log(object);
    return this.http.post("http://localhost:9002/Employe/authenticate", object);
  }

  isUserLoggedIn() {
    let user = localStorage.getItem("token");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    localStorage.removeItem("token");
  }
}
