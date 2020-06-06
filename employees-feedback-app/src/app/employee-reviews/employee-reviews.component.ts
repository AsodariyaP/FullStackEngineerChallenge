import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-reviews',
  templateUrl: './employee-reviews.component.html',
  styleUrls: ['./employee-reviews.component.css']
})
export class EmployeeReviewsComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  reviews: Array<any> = [];
  actionType: '';
  max = 5;
  isReadonly = true;

  overStar: number | undefined;
  percent: number;
  constructor(private modalService: BsModalService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getReviews().subscribe(response => {
      this.reviews = response.reviews;
    });
  }

  openModalReview(template: TemplateRef<any>, actionType) {
    this.actionType = actionType;
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }

  hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = (value / this.max) * 100;
  }

}
