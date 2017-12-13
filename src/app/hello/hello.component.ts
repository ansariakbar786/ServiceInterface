import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  textData: String= 'hellooo...';

//  constructor(public textData: String) { }

  ngOnInit() {
    console.log('connected to the application........');
  }

}
