import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from './review.interface';

@Component({
  selector: 'app-employee-reviews',
  templateUrl: './employee-reviews.component.html',
  styleUrls: ['./employee-reviews.component.css']
})
export class EmployeeReviewsComponent implements OnInit {
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
  constructor(private modalService: BsModalService, private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.empId = params.get('id');
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
    });
  }

  getReviews() {
    this.employeeService.getReviews().subscribe(response => {
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

}
