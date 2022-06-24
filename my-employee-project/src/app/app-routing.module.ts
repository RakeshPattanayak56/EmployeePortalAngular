import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplyeeComponent } from './emplyee/emplyee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
{
  path:"emplyee",component:EmplyeeComponent
},
{path:"view-employee",component:ViewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
