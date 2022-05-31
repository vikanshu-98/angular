import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-component',
  template: `
    <p>
      inline-component works!
    </p><h1>ram ram ji</h1>
  `,
  styles: [
    `h1{color:red}`
  ]
})
export class InlineComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
