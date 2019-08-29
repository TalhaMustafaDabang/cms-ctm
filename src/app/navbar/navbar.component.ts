import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  showUl: boolean = false;
  ngOnInit() {
  }

  toogleMenu(){
    this.showUl=!this.showUl;
  }

  toogleNav(){
    let event = new Event('toogleNav');
    window.dispatchEvent(event);
  }


}
