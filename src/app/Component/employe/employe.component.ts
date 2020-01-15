import { Component, OnInit } from "@angular/core";
import { HttpclientService, Employee } from "../../Services/httpclient.service";

@Component({
  selector: "app-employe",
  templateUrl: "./employe.component.html",
  styleUrls: ["./employe.component.css"]
})
export class EmployeComponent implements OnInit {
  employees: Employee[];
  employes;
  auth;
  constructor(private employe: HttpclientService) {}

  ngOnInit() {
    this.employe.listEmployes().subscribe(data => {
      this.employes = data;
      console.log(data);
    });
  }
  deleteEmploye(employee: Employee): void {
    this.employe.deleteEmployee(employee).subscribe(data => {
      this.employees = this.employees.filter(u => u !== employee);
    });
  }
}

// import { Component, OnInit } from "@angular/core";
// import { HttpclientService, Employee } from "../../Services/httpclient.service";

// @Component({
//   selector: "app-employee",
//   templateUrl: "./employee.component.html",
//   styleUrls: ["./employee.component.css"]
// })
// export class EmployeeComponent implements OnInit {
//   employees: Employee[];

//   constructor(private httpClientService: HttpclientService) {}

//   ngOnInit() {
//     this.httpClientService
//       .getEmployees()
//       .subscribe(response => this.handleSuccessfulResponse(response));
//   }

//   handleSuccessfulResponse(response) {
//     this.employees = response;
//   }
// }
