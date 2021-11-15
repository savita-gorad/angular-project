import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 

  }
generteOTP(mobNo:any){
  let requestData={"mobile":mobNo}
  return this.http.post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',requestData)
}
confirmOTP(txnId:any){
  let reqData={  
    "otp": '653354',
  "txnId":txnId
}
  return this.http.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',reqData)
}
onState(){
  return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
}
getDistrict(state_id:any){
  let url='https://cdn-api.co-vin.in/api/v2/admin/location/districts/' + state_id;

  return this.http.get(url);
}
}
