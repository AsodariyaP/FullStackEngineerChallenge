import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../employee.service';
import { Employee } from './employee.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private employee: Employee;
  modalRef: BsModalRef;
  employees: Array<any> = [];
  actionType: '';
  employeeDetails: any;
  constructor(private modalService: BsModalService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = response.employees;
    });
  }

  addUpdateEmployee() {
    const employee = {
      _id: this.employee.id,
      first_name: this.employee.firstName,
      last_name: this.employee.lastName,
      job_title: this.employee.jobTitle,
      department: this.employee.department,
      dob: this.employee.dob,
      email: this.employee.email,
      phone: this.employee.phone
    };
    this.employeeService.addEmployee(employee).subscribe(response => {
      this.getEmployees();
      this.modalRef.hide();
      this.employee = new Employee();
    });
  }

  openModal(template: TemplateRef<any>, employeeDetails) {
    this.employeeDetails = employeeDetails;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.employeeService.deleteEmployee(this.employeeDetails._id).subscribe(response => {
      this.modalRef.hide();
      this.getEmployees();
    });
  }

  decline(): void {
    this.modalRef.hide();
  }

  openModalEmpInfo(template: TemplateRef<any>, actionType, data) {
    if (actionType === 'Edit') {
      this.employee.firstName = data.first_name;
      this.employee.lastName = data.last_name;
      this.employee.department = data.department;
      this.employee.jobTitle = data.job_title;
      this.employee.phone = data.phone;
      this.employee.email = data.email;
      this.employee.dob = data.dob;
      this.employee.id = data._id;
    }

    this.actionType = actionType;
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }
}
