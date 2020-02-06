import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  // timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
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
      Swal.fire(
        'Company\'s Account Created Sucessfully',
        `Email: ${res.customer.email}\nPassword: ${values.password}`,
        'success'
      )
    })
    .catch(e=>{
      console.error(e)
    })
  }

}
