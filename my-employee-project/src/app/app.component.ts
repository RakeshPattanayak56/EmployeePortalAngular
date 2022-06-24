import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

import { employees } from './classes/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-employee-project';
  opened=false;
}
