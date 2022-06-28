import { Component, OnInit } from '@angular/core';
import { employees } from '../classes/employees';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

   getemployees:any;
  dataitem: string;
  constructor(private _EmployeeService: EmployeeService ){

    _EmployeeService.getemployees().subscribe((data)=>{
      debugger
      this.getemployees=data
    });
  }
  ngOnInit(): void { }
  onEdit(data: { visible: boolean; }) {
    data.visible = true;
  }
  onRowSubmit(dataitem: employees) {
     this.updateEmployeedetails(dataitem);
  }
  updateEmployeedetails(dataitem: employees){
    debugger
    this._EmployeeService.updateEmployeedetails(dataitem).subscribe(
      () => {
        this.dataitem='';
        alert("update Succefully");  
      }
    );
  }
  
}
