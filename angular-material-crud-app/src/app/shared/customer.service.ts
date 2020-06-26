import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL = 'http://localhost:3000/customer';

  constructor(private httpClient: HttpClient) {
  }

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl('', Validators.required),
    identityCard: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    customerType: new FormControl(''),
    dayOfBirth: new FormControl('')
  });

  initializeFormGroup(){
    this.customerForm.get('fullName').reset();
    this.customerForm.get('identityCard').reset();
    this.customerForm.get('phone').reset();
    this.customerForm.get('address').reset();
    this.customerForm.get('customerType').reset();
    this.customerForm.get('dayOfBirth').reset();
  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL);
  }

  create(customer: Partial<Customer>): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + id);
  }

  update(customer: Customer): Observable<Customer> {
    return this.httpClient.patch<Customer>(`${this.API_URL}/${customer.id}`, customer);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.API_URL + '/' + id);
  }

  // editForm(customer: Customer) {
  //   this.customerForm.setValue(lodash.omit(customer));
  // }
}
