import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-css',
  template: `
    <p>
      inline-css works!
    </p>
  `,
  styleUrls: ['./inline-css.component.css']
})
export class InlineCssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
