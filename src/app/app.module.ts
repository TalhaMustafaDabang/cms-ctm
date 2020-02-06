import { DataService } from './services/data.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddIncidentComponent } from './add-incident/add-incident.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewAllCustomerComponent } from './view-all-customer/view-all-customer.component';
import { CustomerComponent } from './view-all-customer/customer/customer.component';
import { AuthService } from './services/auth.service';
import { CompanysCyberfootprintComponent } from './companys-cyberfootprint/companys-cyberfootprint.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
const routes : Routes = [
  {
    path : '',
    component: HomeComponent,
  },
  {
    path : 'add-customer',
    component: AddCustomerComponent,
  },
  {
    path : 'view-customers',
    component: ViewAllCustomerComponent,
  },
  { path: 'add-company-cyber-footprint', component: CompanysCyberfootprintComponent },
  { path: 'add-incident', component: AddIncidentComponent },
  { path: '**', component: PageNotFoundComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddIncidentComponent,
    PageNotFoundComponent,
    HomeComponent,
    AddCustomerComponent,
    ViewAllCustomerComponent,
    CustomerComponent,
    CompanysCyberfootprintComponent
  ],
  imports: [
    // RouterModule,
    // DataService,
    SweetAlert2Module.forRoot(),
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    MatTableModule
  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
