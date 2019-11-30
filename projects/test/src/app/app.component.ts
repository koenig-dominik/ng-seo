import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'title';
  prefix = 'prefix | ';
  suffix = ' | suffix';
  description = 'description';

  constructor() {
    setTimeout(() => {
      this.title = 'title2';
      this.description = '';
    }, 5000);
  }
}
