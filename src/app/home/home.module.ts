import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { RouterModule, Routes } from '@angular/router';
import { VaccineCountComponent } from './vaccine-count/vaccine-count.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { SearchCenterComponent } from './search-center/search-center.component';
import { RaiseIssueComponent } from './raise-issue/raise-issue.component';
import { VaccineStepsComponent } from './vaccine-steps/vaccine-steps.component';
import { FAQComponent } from './faq/faq.component';
import { SummaryCompComponent } from './summary-comp/summary-comp.component';
import { OurPartnerComponent } from './our-partner/our-partner.component';
import { FormsModule } from '@angular/forms';



const routes:Routes=[
  {path:'',component:LandingHomeComponent},
  {path:'vaccine-count',component:VaccineCountComponent},
  {path:'search-center',component:SearchCenterComponent},
  {path:'raise-issue',component:RaiseIssueComponent},
  {path:'whatnew',component:WhatsnewComponent},
  {path:'vaccine-step',component:VaccineStepsComponent}
]


@NgModule({
  declarations: [
    LandingHomeComponent,
    VaccineCountComponent,
    WhatsnewComponent,
    SearchCenterComponent,
    RaiseIssueComponent,
    VaccineStepsComponent,
    FAQComponent,
    SummaryCompComponent,
    OurPartnerComponent
    

  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule
    
    
  ]
})
export class HomeModule { }
