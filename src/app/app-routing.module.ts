import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'',loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path:'Dashboard',loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)},
{path:'Admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
{path:'signIn',loadChildren:()=>import('./registration/registration.module').then(mod=>mod.RegistrationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
