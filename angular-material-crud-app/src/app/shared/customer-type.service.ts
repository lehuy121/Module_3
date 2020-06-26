import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from './customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  API_URL = 'http://localhost:3000/customerType';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.API_URL);
  }
}
