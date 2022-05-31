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
  disable =true
  color="voilet"
  student = [
    {name:"vikanshu",course:"b.tech",address:[{post:"uk",pincode:"25033"}]},
    {name:"ramesh",course:"b.tech",address:[{post:"us",pincode:"25033"}]},
    {name:"rom",course:"b.tech",address:[{post:"uf",pincode:"25033"}]},
    {name:"ram",course:"b.tech",address:[{post:"ua",pincode:"25033"}]},
    {name:"singh",course:"b.tech",address:[{post:"ue",pincode:"25033"}]},
  ]
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
