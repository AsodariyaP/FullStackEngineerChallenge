import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeReviewsComponent } from './employee-reviews/employee-reviews.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin/employees', component: AdminComponent },
  { path: 'admin/employees/reviews/:id', component: EmployeeReviewsComponent },
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
