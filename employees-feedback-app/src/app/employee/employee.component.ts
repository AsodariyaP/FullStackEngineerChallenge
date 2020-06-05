import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  reviews: Array<any> = [];
  constructor(private modalService: BsModalService, private employeeService: EmployeeService) { }


  ngOnInit() {
    this.employeeService.getReviews().subscribe(response => {
      this.reviews = response;
    });
  }

  openModalReview(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
}

}
