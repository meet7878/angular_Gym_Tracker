  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPersonalDetailComponent } from './Admin/view-personal-detail/view-personal-detail.component';
import { ViewUserComponent } from './Admin/view-user/view-user.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { EditUserFormComponent } from './Admin/edit-user-form/edit-user-form.component';
import { HomeComponent } from './UserSide/home/home.component';


import { LoginComponent } from './login/login.component';
import { PersonaldetailComponent } from './UserSide/personaldetail/personaldetail.component';
import { SignupComponent } from './signup/signup.component';
import { UserlayoutComponent } from './UserSide/userlayout/userlayout.component';
import { OfferComponent } from './Admin/offer/offer.component';
import { ViewofferComponent } from './UserSide/viewoffer/viewoffer.component';
import { UserofferComponent } from './Admin/useroffer/useroffer.component';
import { AddDietComponent } from './Admin/add-diet/add-diet.component';
import { ListDietComponent } from './Admin/list-diet/list-diet.component';
import { ViewDietComponent } from './Admin/view-diet/view-diet.component';
import { EditDietComponent } from './Admin/edit-diet/edit-diet.component';
import { AdminlayoutComponent } from './Admin/adminlayout/adminlayout.component';
import { WorkoutAddComponent } from './Admin/workout-add/workout-add.component';
import { WorkoutEditComponent } from './Admin/workout-edit/workout-edit.component';
import { WorkoutListComponent } from './Admin/workout-list/workout-list.component';





const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'/signup',
  //   pathMatch:'full'
  // },

  {component:LoginComponent,path:"login"},
  {component:SignupComponent,path:"signup"},
  {component:SignupComponent,path:""} 
 ,
  {component:UserlayoutComponent,path:"user",children:[
    {component:HomeComponent,path:"home"},
    {component:PersonaldetailComponent,path:"personal"},
    {component:ViewofferComponent,path:"viewalloffer"},
    
  
  ]},

  {component:AdminlayoutComponent,path:"admin",children:[
    {component:DashboardComponent,path:"dashboard"},
    {component:ViewUserComponent,path:"viewuser"},
    {component:ViewPersonalDetailComponent,path:"ViewPersonalDetail/:userId"},
    {component:EditUserFormComponent,path:"edituser/:userId"},
    {component:OfferComponent,path:"offer"},
    {component:UserofferComponent,path:"adminoffer/:userId"},
    {component:AddDietComponent,path:"adddiet"},
    {component:ListDietComponent,path:"listdiet"},
      {component: ViewDietComponent, path:"viewdiet"},
      {component: EditDietComponent,path:"editdiet/:roleId"},
      {component:WorkoutAddComponent,path:"addworkout"},
      {component:WorkoutEditComponent,path:"editworkout"},
      {component:WorkoutListComponent,path:"listworkout"}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
