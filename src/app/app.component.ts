import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cms';
  navState: boolean = false;
  constructor() {
    window.addEventListener('toogleNav', () => {
      this.navState = !this.navState;

    });

  }

  closeNav() {
    this.navState = !this.navState;
  }

}
