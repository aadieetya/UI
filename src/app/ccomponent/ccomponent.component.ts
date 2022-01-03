import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ccomponent',
  templateUrl: './ccomponent.component.html',
  styleUrls: ['./ccomponent.component.css'],
})
export class CcomponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  cards = [
    {
      text: 'Please Enter Text...',
      icon1: 'delete',
      icon2: 'edit',
      icon3: 'arrow_upward',
      icon4: 'arrow_downward',
    },
    {
      text: 'Please Enter Text...',
      icon1: 'delete',
      icon2: 'edit',
      icon3: 'arrow_upward',
      icon4: 'arrow_downward',
    },
    {
      text: 'Please Enter Text...',
      icon1: 'delete',
      icon2: 'edit',
      icon3: 'arrow_upward',
      icon4: 'arrow_downward',
    },
  ];
}
