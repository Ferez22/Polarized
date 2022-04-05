import { Component } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
// import 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Polar';

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector('.vanillaTilt') as any);
  }
}
