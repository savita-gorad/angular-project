import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryDashComponent } from './summary-dash/summary-dash.component';
import { VaccinationTrendComponent } from './vaccination-trend/vaccination-trend.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path:'summaryDash',component:SummaryDashComponent},
  {path:'trend',component:VaccinationTrendComponent}
]

@NgModule({
  declarations: [
    SummaryDashComponent,
    VaccinationTrendComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class DashboardModule { }
