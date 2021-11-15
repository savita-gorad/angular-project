import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-search-center',
  templateUrl: './search-center.component.html',
  styleUrls: ['./search-center.component.css']
})
export class SearchCenterComponent implements OnInit {

  constructor(private ser:ServiceService) {
    this.onState()
   }

  public userDistrict:any;
  public userState:any;
  public selectedState:any;
  
  ngOnInit(): void {
  }

  onState(){
this.ser.onState().subscribe(res=>{
  this.userState=res;
  this.userState=this.userState.states;
})

  }
  getDistrict(state_id:any){
    this.ser.getDistrict(state_id).subscribe(res=>{
      this.userDistrict=res;
      this.userDistrict=this.userDistrict.districts;
      console.log(this.userDistrict);
      
    })
  }

  onStateSelect(ev:any){
    // this.ser.onState().subscribe(res=>{
    //   console.log(res);
    //   this.state=res;
    //   this.state=this.state.states;
    //   console.log(this.state)

  this.getDistrict(this.selectedState)
  }


}


