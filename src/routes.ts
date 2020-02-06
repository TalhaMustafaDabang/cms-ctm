import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddIncidentComponent } from './app/add-incident/add-incident.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { CompanysCyberfootprintComponent } from './app/companys-cyberfootprint/companys-cyberfootprint.component';
import { AddCustomerComponent } from './app/add-customer/add-customer.component';

const routes: Routes = [
  { path: 'add-incident', component: AddIncidentComponent },
  { path: 'add-company-cyber-footprint', component: CompanysCyberfootprintComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
