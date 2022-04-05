import { Component, OnInit } from '@angular/core';
// import 'jquery';
// import '~material-design-icons/iconfont/material-icons.css';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  
  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }

}
