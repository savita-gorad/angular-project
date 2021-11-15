import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-dash',
  templateUrl: './summary-dash.component.html',
  styleUrls: ['./summary-dash.component.css']
})
export class SummaryDashComponent implements OnInit {


public state=['Select States','Maharastra','bihar','karnataka','hydrabad','Gujrat','Goa','himachal pradesh','Delhi',
'Arunachal pradesh','kerala','ladakh','daman and Diu','haryana'];
public District=['Select District']

public export=['Export','Json','Excel']


  constructor() { }

  ngOnInit(): void {
  }

}
