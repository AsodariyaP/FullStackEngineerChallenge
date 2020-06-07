import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER + '/api/employees');
  }

  addEmployee(employee): Observable<any> {
    return this.httpClient.post(this.REST_API_SERVER + '/api/employees', employee);
  }

  deleteEmployee(id): Observable<any> {
    return this.httpClient.delete(this.REST_API_SERVER + '/api/employees/' + id);
  }

  getEmployeeInfoById(id): Observable<any> {
    const data = { emplId: id };
    return this.httpClient.post(this.REST_API_SERVER + '/api/employee_get_by_id', data);
  }

  getReviews(id): Observable<any> {
    const data = { emp_id: id };
    return this.httpClient.post(this.REST_API_SERVER + '/api/reviews_by_id', data);
  }

  addReview(review): Observable<any> {
    return this.httpClient.post(this.REST_API_SERVER + '/api/reviews', review);
  }
}
