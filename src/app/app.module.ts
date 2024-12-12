import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdnindashboardComponent } from './adnindashboard/adnindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobsComponent } from './userdashboard/jobs/jobs.component';
import { AppliedJobsComponent} from './userdashboard/appliedjobs/appliedjobs.component';
import { AddJobsComponent } from './admindashboard/add-jobs/add-jobs.component';
import { ManageJobsComponent } from './admindashboard/manage-jobs/manage-jobs.component';
import { HttpClientModule } from '@angular/common/http';
import { AddusersComponent } from './admindashboard/addusers/addusers.component';
import { UsersComponent } from './userdashboard/users/users.component';
import { EditprofileComponent } from './userdashboard/editprofile/editprofile.component';
import { SettingsComponent } from './admindashboard/settings/settings.component';
import { LogoutComponent } from './admindashboard/logout/logout.component';
import { UserprofileComponent } from './userdashboard/userprofile/userprofile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdnindashboardComponent,
    UserdashboardComponent,
    JobsComponent,
    AppliedJobsComponent,
    AddJobsComponent,
    ManageJobsComponent,
    AddusersComponent,
    UsersComponent,
    EditprofileComponent,
    SettingsComponent,
    LogoutComponent,
    UserprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
