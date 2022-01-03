import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lcomponent',
  templateUrl: './lcomponent.component.html',
  styleUrls: ['./lcomponent.component.css'],
})
export class LcomponentComponent implements OnInit {
  constructor() {}

  dragOpts = [
    {
      icon: 'notes',
      txt: 'Text Area',
    },
    {
      icon: 'checklist',
      txt: 'MS Dropdown',
    },
    {
      icon: 'calendar_today',
      txt: 'Date & Time',
    },
    {
      icon: 'radio_button_checked',
      txt: 'Radio',
    },
    {
      icon: 'list_alt',
      txt: 'Checklist',
    },
    {
      icon: 'table_view',
      txt: 'Table',
    },
    {
      icon: 'text_fields',
      txt: 'Breif Text',
    },
    {
      icon: 'toggle_on',
      txt: 'Toggle Button',
    },
    {
      icon: 'today',
      txt: 'Date',
    },
    {
      icon: 'expand_more',
      txt: 'Dropdown',
    },
    {
      icon: 'attach_file',
      txt: 'Attach',
    },
    {
      icon: 'language',
      txt: 'Country',
    },
    {
      icon: 'map',
      txt: 'State',
    },
    {
      icon: 'business',
      txt: 'City',
    },
    {
      icon: 'piano',
      txt: 'COM',
    },
    {
      icon: 'calculate',
      txt: 'Calculated Field',
    },
  ];

  ngOnInit(): void {}
}
