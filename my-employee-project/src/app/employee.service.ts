import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient: HttpClient) { }
  getemployees():Observable<any>{
    debugger
    return this.httpclient.get("https://employeecontrol.azurewebsites.net/api/Employee/getemployees")
  }
}
