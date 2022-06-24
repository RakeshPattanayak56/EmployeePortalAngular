import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

   getemployees:any;
  constructor(private _EmployeeService: EmployeeService ){

    _EmployeeService.getemployees().subscribe((data)=>{
      console.warn("data",data);
      debugger
      this.getemployees=data
    });
  }
  ngOnInit(): void { }
  
}
