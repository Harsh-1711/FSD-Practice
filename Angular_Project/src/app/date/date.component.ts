import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css',
})
export class DateComponent {
  dt = new Date();
  day = this.dt.getDate();
  month = this.dt.getMonth();
  year = this.dt.getFullYear();
}
