import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-companys-cyberfootprint',
  templateUrl: './companys-cyberfootprint.component.html',
  styleUrls: ['./companys-cyberfootprint.component.css']
})
export class CompanysCyberfootprintComponent implements OnInit {
  subscribedCompanies = []
  constructor(public ds: DataService) { }

  ngOnInit() {
    this.ds.getAllCustomers().then(data=>{
      this.subscribedCompanies = data.companies;
      console.log(this.subscribedCompanies)
    })
    .catch(e=>{
      console.log(e)
    })
  }

}
