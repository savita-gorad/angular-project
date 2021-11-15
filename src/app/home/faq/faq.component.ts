import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  showAll:any=true;
  showReg:any=false;
  showLog: boolean=false;
  showCertify:boolean=false;
  showMedical:boolean=false;
  showRaise:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  allData(){
this.showAll=true;
this.showReg=false;
this.showLog=false;
this.showCertify=false;
this.showMedical=false;
this.showRaise=false;
  }

  registrate(){    
this.showAll=false;
this.showReg=true;
this.showLog=false;
this.showCertify=false;
this.showMedical=false;
this.showRaise=false;
  }

 login(){   
this.showAll=false;
this.showReg=false;
this.showLog=true;
this.showCertify=false;
this.showMedical=false;
this.showRaise=false;
  }


  certify(){   
this.showAll=false;
this.showReg=false;
this.showLog=false;
this.showCertify=true;
this.showMedical=false;
this.showRaise=false;
  }

  medical(){ 
this.showAll=false;
this.showReg=false;
this.showLog=false;
this.showCertify=false;
this.showMedical=true;
this.showRaise=false;
  }

  raise(){   
this.showAll=false;
this.showReg=false;
this.showLog=false;
this.showCertify=false;
this.showMedical=false;
this.showRaise=true;
  }

}
