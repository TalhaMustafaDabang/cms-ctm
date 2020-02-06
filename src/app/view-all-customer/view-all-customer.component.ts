import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-all-customer',
  templateUrl: './view-all-customer.component.html',
  styleUrls: ['./view-all-customer.component.css']
})
export class ViewAllCustomerComponent implements OnInit {
  companies=[];
  displayedColumns: string[] = ['id','companyName','customerName','customerEmail'];
  constructor(private ds: DataService) { }

  ngOnInit() {
  this.ds.getAllCustomers().then(e=>{
    this.companies=e.companies;
    console.log(this.companies)
  });
  }

}
