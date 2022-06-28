import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employees } from './classes/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'https://employeecontrol.azurewebsites.net/api';

  constructor(private httpclient: HttpClient) { }
  getemployees(): Observable<employees[]> {
    return this.httpclient.get<employees[]>(this.url + '/Employee/getemployees');
  }
  updateEmployeedetails(employeedetails: employees): Observable<employees> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.httpclient.post<employees>(this.url + '/Employee/saveemployee',employeedetails, httpOptions);
  }
}
