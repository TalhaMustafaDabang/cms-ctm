import { DataService } from './../services/data.service';
import { iIncident } from './../interfaces/iIncident';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.css']
})
export class AddIncidentComponent implements OnInit {
  incident: iIncident = {};
  constructor(private ds: DataService) { }

  ngOnInit() {
  }
  submitIncident(value) {
    this.incident.creationDate = new Date;
    this.incident.lastUpdateDate = new Date;
    this.incident.member = value.member;
    this.incident.actualCOA = value.actualCOA;
    this.incident.authorizationEvidence = value.authorizationEvidence;
    this.incident.baiting = value.baiting;
    this.incident.brands = value.brands;
    this.incident.description = value.description;
    this.incident.fraudCasting = value.fraudCasting;
    this.incident.incidentClass = value.incidentClass;
    this.incident.type = value.type;
    this.incident.suggestedCOA = value.suggestedCOA;
    this.incident.status = value.status;
    this.incident.severity = value.severity;
    this.incident.reappearanceCount = 0;
    this.incident.preAuthorised = value.preAuthorised;
    this.incident.memberRequestedCourseOfAction = <boolean>value.memberRequestedCourseOfAction;
    this.incident.incidentSubject = value.incidentSubject;
    this.incident.remarks = value.remarks;
    if (value.memberFeedbackRemarks != "") {
      this.incident.memberFeedbackRemarks = value.memberFeedbackRemarks;
      this.incident.feedbackProvidedByMember = <boolean>value.feedbackProvidedByMember;
      this.incident.memberFeedbackProvidedBy = "user";
      this.incident.memberFeedbackProvidedAt = new Date();
    }
    this.ds.addIncident(this.incident).then((e) => {
      console.log(e)
      Swal.fire(
        'Incident Added',
        // 'You clicked the button!',
        'success'
      )
      // this.ds.getAllIncidents().then(e => {
      // console.log(e)
      // })
    })
      .catch(e => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: `${JSON.stringify(e)}`
        })
        console.log("err", e)
      })
  }

}
