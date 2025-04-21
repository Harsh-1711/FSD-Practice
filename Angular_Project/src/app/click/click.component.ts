import { Component } from '@angular/core';

@Component({
  selector: 'app-click',
  imports: [],
  templateUrl: './click.component.html',
  styleUrl: './click.component.css',
})
export class ClickComponent {
  message: string = 'Hello buddy!';
  value: number = 0;

  clickMessage() {
    if (this.message === 'Nice!') this.message = 'Hello buddy!';
    else this.message = 'Nice!';
  }
  increment() {
    this.value += 1;
  }
  decrement() {
    if (this.value != 0) this.value -= 1;
  }
}
