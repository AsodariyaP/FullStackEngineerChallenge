import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from './review.interface';
import { TagInputModule } from 'ngx-chips';

@Component({
  selector: 'app-employee-reviews',
  templateUrl: './employee-reviews.component.html',
  styleUrls: ['./employee-reviews.component.css']
})
export class EmployeeReviewsComponent implements OnInit {
  reviewersInfo = [];
  private review: Review;
  modalRef: BsModalRef;
  reviews: Array<any> = [];
  actionType: '';
  isReadonly = true;
  max = 5;
  overStar: number | undefined;
  percent: number;
  empId = '';
  employeeInfo: any;
  employees: Array<any> = [];
  constructor(private modalService: BsModalService, private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.empId = params.get('id');
    });

    TagInputModule.withDefaults({
      tagInput: {
        placeholder: 'Add a new reviewer',
      },
      dropdown: {
        displayBy: 'select reviewer',
      }
    });
  }

  ngOnInit() {
    this.review = new Review();
    this.getReviews();
    this.getEmployeeInfoById();
  }

  getEmployeeInfoById() {
    this.employeeService.getEmployeeInfoById(this.empId).subscribe(response => {
      this.employeeInfo = response.data;
      this.getEmployees();
    });
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = response.employees;
      /* self not assign for review remove employee */
      this.employees = this.employees.filter(e => e._id !== this.empId);
      this.employees.forEach((emp, ind) => {
        this.employees[ind].fullName = emp.first_name + ' ' + emp.last_name;
        /* set default reviewer */
        if (this.employeeInfo.reviewers.length > 0) {
          if (this.employeeInfo.reviewers.some(x => x === emp._id)) {
            this.reviewersInfo.push({ _id: emp._id, fullName: emp.first_name + ' ' + emp.last_name });
          }
        }
      });
    });
  }

  getReviews() {
    this.employeeService.getReviews(this.empId).subscribe(response => {
      this.reviews = response.reviews;
    });
  }

  openModalReview(template: TemplateRef<any>, actionType, data) {
    if (actionType === 'Edit') {
      this.review.qualityWork = data.quality_work;
      this.review.relationCoworkers = data.relation_coworkers;
      this.review.initiative = data.initiative;
      this.review.communication = data.communication;
      this.review.timePeriodFrom = data.time_period_from;
      this.review.timePeriodTo = data.time_period_to;
      this.review.feedback = data.feedback;
      this.review.id = data._id;
    }
    this.actionType = actionType;
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }

  addUpdateReview() {
    const review = {
      quality_work: this.review.qualityWork,
      relation_coworkers: this.review.relationCoworkers,
      initiative: this.review.initiative,
      communication: this.review.communication,
      time_period_to: this.review.timePeriodTo,
      time_period_from: this.review.timePeriodFrom,
      reviewer: 'Admin',
      feedback: this.review.feedback,
      emp_id: this.empId,
      _id: this.review.id
    };
    this.employeeService.addReview(review).subscribe(response => {
      this.modalRef.hide();
      this.getReviews();
      this.review = new Review();
    });
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

  resetStar(): void {
    this.overStar = void 0;
  }

  onAssignReviewer(data) {
    this.employeeInfo.reviewers.push(data._id);
    this.employeeService.addEmployee(this.employeeInfo).subscribe(response => {
    });
  }

  onRemovedReviewer(data) {
    const index = this.employeeInfo.reviewers.indexOf(data._id);
    if (index > -1) {
      this.employeeInfo.reviewers.splice(index, 1);
    }
    this.employeeService.addEmployee(this.employeeInfo).subscribe(response => {
    });
  }
}
