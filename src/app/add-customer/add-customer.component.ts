import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private authS: AuthService) { }

  ngOnInit() {
  }

  addCustomer(values){
    this.authS.createCustomer(values).then((res)=>{
      console.log(res)
    })
    .catch(e=>{
      console.error(e)
    })
  }

}
