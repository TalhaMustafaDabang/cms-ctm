import { Injectable } from '@angular/core';
import { CreateCustomer } from '../interfaces/create-customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createCustomer(customer:CreateCustomer):Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      })
    }
    return this.http.post("http://localhost:3000/company/signup", customer, { headers: httpOptions.headers }).toPromise();
  }

  

  // getCustomers()
}
