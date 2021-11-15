import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {
  public lang=['English','Hindi','Marathi','Gujarat','Kannada','Tamil','Telgu'];

public mobNo:any;
public txnId:any;
public OTP:any;
generate:any=true;
confirm:any=false;
  constructor(private ser:ServiceService) { }

  ngOnInit(): void {
  }
  generateOTP(){
    this.generate=true;
    this.confirm=false;
    console.log(this.mobNo)
    this.ser.generteOTP(this.mobNo).subscribe(res=>{
      console.log(res)
      let data:any=res;
      console.log(data.txnId)
      this.txnId=data.txnId;
    })
  }
  confirmOTP(){
    this.generate=false;
    this.confirm=true;
    
    this.ser.confirmOTP(this.txnId).subscribe(data2=>{
      console.log(data2)
    })
  }

}
