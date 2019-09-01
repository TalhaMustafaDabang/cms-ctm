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
const routes : Routes = [
  {
    path : '',
    component: HomeComponent,
  },

  { path: 'add-incident', component: AddIncidentComponent },
  { path: '**', component: PageNotFoundComponent },

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddIncidentComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    // RouterModule,
    // DataService,
    SweetAlert2Module.forRoot(),
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    // AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
