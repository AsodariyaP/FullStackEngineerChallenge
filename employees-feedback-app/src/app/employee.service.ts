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

  getReviews(): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER + '/api/reviews');
  }
}
