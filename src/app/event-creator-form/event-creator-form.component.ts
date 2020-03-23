import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-event-creator-form',
  templateUrl: './event-creator-form.component.html',
  styleUrls: ['./event-creator-form.component.css']
})
export class EventCreatorFormComponent implements OnInit {
  eventCreatorForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
