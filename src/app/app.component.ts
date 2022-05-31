import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Viknashu chahu';
  value=2;

  getValue(){
    return "function chauhsn";
  }
}
