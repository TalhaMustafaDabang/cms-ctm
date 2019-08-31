import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iIncident } from '../interfaces/iIncident';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  addIncident(incident: iIncident): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'my-auth-token'
        'Access-Control-Allow-Origin': "*"
      })
    };
    // return this.http.post("https://demo-contact-app-talha.herokuapp.com/incident", incidet, { headers: httpOptions.headers }).toPromise()
    return this.http.post("http://localhost:3000/incident", incident, { headers: httpOptions.headers }).toPromise()
  }

  getAllIncidents(): Promise<any> {
    // return this.http.get("https://demo-contact-app-talha.herokuapp.com/incident").toPromise()
    return this.http.get("http://localhost:3000/incident").toPromise()

  }
}
