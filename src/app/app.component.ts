import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Viknashu chahu';
  value=2;
  inputValue:any;
  count = 0;
  getValue(){
    return "function chauhsn";
  }
  getCount(caount:number){
    this.count +=  caount;
    console.log(this.count);
  }

  blurFunction(name:any){
    this.inputValue = name
    console.log(name);
    
  }
   
  
}
