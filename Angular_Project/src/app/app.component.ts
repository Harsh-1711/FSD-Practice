import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { FooterComponent } from './footer/footer.component';
import { DateComponent } from './date/date.component';
// import { IRCTCComponent } from './irctc/irctc.component';
import { ClickComponent } from './click/click.component';
import { ChatgptCloneComponent } from './chatgpt-clone/chatgpt-clone.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // FooterComponent,
    // IRCTCComponent,
    DateComponent,
    ClickComponent,
    ChatgptCloneComponent,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
