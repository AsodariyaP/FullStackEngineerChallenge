import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../employee.service';
import { Review } from '../employee-reviews/review.interface';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private review: Review;
  modalRef: BsModalRef;
  employees: Array<any> = [];
  employeeInfo: any;
  isReadonly = true;
  max = 5;
  overStar: number | undefined;
  percent: number;
  constructor(private modalService: BsModalService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.review = new Review();
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = response.employees;
    });
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

  addReview() {
    const review = {
      quality_work: this.review.qualityWork,
      relation_coworkers: this.review.relationCoworkers,
      initiative: this.review.initiative,
      communication: this.review.communication,
      time_period_to: this.review.timePeriodTo,
      time_period_from: this.review.timePeriodFrom,
      reviewer: 'Employee',
      emp_id: this.employeeInfo._id,
      feedback: this.review.feedback
    };
    this.employeeService.addReview(review).subscribe(response => {
      this.modalRef.hide();
      this.review = new Review();
    });
  }

  openModalReview(template: TemplateRef<any>, employeeInfo) {
    this.employeeInfo = employeeInfo;
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }
}
