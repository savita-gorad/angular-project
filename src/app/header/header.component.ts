import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public lang=['English','Hindi','Marathi','Gujarati','Kannada','Tamil','Telgu'];

 
  constructor() { }

  ngOnInit(): void {
  }
  navigateToStaff(){
    console.log('hi')
  }

  navigateToPlatform(){
    console.log('hiiii')
  }

  navigateToResources(){
    console.log('hello')
  }

  navigateToSupport(){
    console.log('hellohi')
  }

}
