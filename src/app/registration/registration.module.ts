import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterMemberComponent } from './register-member/register-member.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
const routes:Routes=[
  {path:'register-member',component:RegisterMemberComponent}
]


@NgModule({
  declarations: [
    RegisterMemberComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule
  ]
})
export class RegistrationModule { }
