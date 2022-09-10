import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './UserSide/home/home.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { PersonaldetailComponent } from './UserSide/personaldetail/personaldetail.component';
import { UserlayoutComponent } from './UserSide/userlayout/userlayout.component';
import { ViewUserComponent } from './Admin/view-user/view-user.component';
import { EditUserFormComponent } from './Admin/edit-user-form/edit-user-form.component';
import { ViewPersonalDetailComponent } from './Admin/view-personal-detail/view-personal-detail.component';
import { OfferComponent } from './Admin/offer/offer.component';
import { ViewofferComponent } from './UserSide/viewoffer/viewoffer.component';
import { UserofferComponent } from './Admin/useroffer/useroffer.component';
import { AddDietComponent } from './Admin/add-diet/add-diet.component';
import { ViewDietComponent } from './Admin/view-diet/view-diet.component';
import { ListDietComponent } from './Admin/list-diet/list-diet.component';
import { EditDietComponent } from './Admin/edit-diet/edit-diet.component';
import { AdminheaderComponent } from './Admin/adminheader/adminheader.component';
import { AdminlayoutComponent } from './Admin/adminlayout/adminlayout.component';
import { WorkoutAddComponent } from './Admin/workout-add/workout-add.component';
import { WorkoutEditComponent } from './Admin/workout-edit/workout-edit.component';
import { WorkoutListComponent } from './Admin/workout-list/workout-list.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    PersonaldetailComponent,
    UserlayoutComponent,
    ViewUserComponent,
    EditUserFormComponent,
    ViewPersonalDetailComponent,
    OfferComponent,
    ViewofferComponent,
    UserofferComponent,
    AddDietComponent,
    ViewDietComponent,
    ListDietComponent,
    EditDietComponent,
    AdminheaderComponent,
    AdminlayoutComponent,
    WorkoutAddComponent,
    WorkoutEditComponent,
    WorkoutListComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
