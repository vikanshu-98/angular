import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Viknashu chahu';
  value=2;
  count = 0;
  getValue(){
    return "function chauhsn";
  }
  getCount(caount:number){
    this.count +=  caount;
    console.log(this.count);
  }
   
  
}
