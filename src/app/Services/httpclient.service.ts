import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpclientService {
  constructor(private http: HttpClient) {}
  listEmployes() {
    let header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );

    return this.http.get(" http://localhost:9002/Employe/all", {
      headers: header
    });
  }
  // getEmployees() {
  //   let basicString = this.getHeaders();

  //   let headers = new HttpHeaders({ Authorization: basicString });
  //   console.log("test call");
  //   return this.http.get("http://localhost:9002/Employe", {
  //     headers
  //   });
  // }

  deleteEmployee(employee) {
    return this.http.delete(
      "http://localhost:9002/Employe/",
      employee.id_employe
    );
  }

  createEmployee(employee) {
    return this.http.post("http://localhost:9002/Employe", employee);
  }

  // getHeaders() {
  //   let username = "admin";
  //   let password = "password";

  //   let basicString = "Basic " + window.btoa(username + ":" + password);
  //   return basicString;
  // }
}
