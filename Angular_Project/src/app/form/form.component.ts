import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  // standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  err: string = '';
  logobj: any = {
    uname: '',
    upass: '',
  };
  submitForm() {
    // event.preventDefault();
    if (this.logobj.uname == '' || this.logobj.upass == '')
      alert('Enter all details');
    else alert(this.logobj.uname + ' ' + this.logobj.upass);
    console.log('Form submitted:', this.logobj);
  }
}
