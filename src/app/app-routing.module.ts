  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'/signup',
  //   pathMatch:'full'
  // },
  {component:DashboardComponent,path:"dashboard"},
  {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"},
  {component:SignupComponent,path:""},
  {component:HomeComponent,path:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
