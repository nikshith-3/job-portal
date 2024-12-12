import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdnindashboardComponent } from './adnindashboard/adnindashboard.component';
import { JobsComponent } from './userdashboard/jobs/jobs.component';
import { AppliedJobsComponent } from './userdashboard/appliedjobs/appliedjobs.component';
import { AddJobsComponent } from './admindashboard/add-jobs/add-jobs.component';
import { ManageJobsComponent } from './admindashboard/manage-jobs/manage-jobs.component';
import { AddusersComponent } from './admindashboard/addusers/addusers.component';
import { UsersComponent } from './userdashboard/users/users.component';
import { SettingsComponent } from './admindashboard/settings/settings.component';
import { LogoutComponent } from './admindashboard/logout/logout.component';
import { UserprofileComponent } from './userdashboard/userprofile/userprofile.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'user-dashboard', component: UserdashboardComponent,
    children: [
      { path: 'jobs', component: JobsComponent },
      { path: 'applied-jobs', component: AppliedJobsComponent},
      { path: 'userprofile', component:UserprofileComponent },
      {path:'users',component:UsersComponent},
      { path: '', redirectTo: 'jobs', pathMatch: 'full' },
    ]

  },
  { path: 'admin-dashboard', component: AdnindashboardComponent ,
    children: [
      { path: 'jobs1', component: JobsComponent },
      { path: 'add-jobs', component: AddJobsComponent },
      { path: 'manage-jobs', component: ManageJobsComponent },
      {path:'addusers', component:AddusersComponent},
      {path:'settings',component:SettingsComponent},
      {path:'logout',component:LogoutComponent},
      { path: '', redirectTo: 'jobs', pathMatch: 'full' }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
