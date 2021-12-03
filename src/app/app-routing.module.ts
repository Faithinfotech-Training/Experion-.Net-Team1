import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourcesComponent } from './resources/resources.component';
import {AuthGuard} from './shared/auth.guard';
import { CenquiriesComponent } from './cenquiries/cenquiries.component';
import { CenquiryListComponent } from './cenquiries/cenquiry-list/cenquiry-list.component';
import { CenquiryComponent } from './cenquiries/cenquiry/cenquiry.component';
import { UpdatecenquiryComponent } from './cenquiries/updatecenquiry/updatecenquiry.component';
//import { Routes, RouterModule } from '@angular/router';
import { RenquiriesComponent } from './renquiries/renquiries.component';
import { RenquiryListComponent } from './renquiries/renquiry-list/renquiry-list.component';
import { RenquiryComponent } from './renquiries/renquiry/renquiry.component';
import { UpdaterenquiryComponent } from './renquiries/updaterenquiry/updaterenquiry.component';
import { CordinatorComponent } from './cordinator/cordinator.component';

const routes: Routes = [

  {path:'', redirectTo:"/home",pathMatch: 'full'},
  {path:'resource', component: ResourceComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'resources',component:ResourcesComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'resourcelist',component: ResourceListComponent},
  {path:'resource/:resourceId', component: ResourceComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'resourcelist/resource',component: ResourceComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path:'manager', component: ManagerComponent,canActivate:[AuthGuard],data:{role:'2'}},
  {path:'cordinator', component: CordinatorComponent,canActivate:[AuthGuard],data:{role:'3'}},
  //{path:'user', component: ManagerComponent,canActivate:[AuthGuard],data:{role:'4'}},
  {path:'courses',component:CoursesComponent},
  {path:'course', component: CourseComponent},
  {path:'courselist',component: CourseListComponent},
  {path:'course/:corId', component: CourseComponent},
  {path:'courselist/course',component: CourseComponent},
  {path:'Cenquiries',component:CenquiriesComponent},
  {path:'Cenquiry',component:CenquiryComponent},
  {path:'CenquiryList',component:CenquiryListComponent},
  {path:'UpdateCenquiry',component:UpdatecenquiryComponent},
  {path:'cenquiry/:CEnquiryId',component:CenquiryComponent},
  {path:'Renquiries',component:RenquiriesComponent},
  {path:'Renquiry',component:RenquiryComponent},
  {path:'UpdateRenquiry',component:UpdaterenquiryComponent},
  {path:'cenquiries',component:CenquiriesComponent},
  {path:'cenquiry',component:CenquiryComponent},
  {path:'cenquirylist',component:CenquiryListComponent},
  {path:'updatecenquiry',component:UpdatecenquiryComponent},
  {path:'cenquiry/:CEnquiryId',component:CenquiryComponent},
  {path:'renquiries',component:RenquiriesComponent},
  {path:'renquiry',component:RenquiryComponent},
  {path:'updaterenquiry',component:UpdaterenquiryComponent},
  {path:'renquiry/:REnquiryId',component:RenquiryComponent},
  {path:'cenquiryList',component:CenquiryListComponent},
  {path:'updateCenquiry',component:UpdatecenquiryComponent},
  {path:'cenquiry/:cenquiryId',component:CenquiryComponent},
  {path:'renquiries',component:RenquiriesComponent},
  {path:'renquiry',component:RenquiryComponent},
  {path:'updateRenquiry',component:UpdaterenquiryComponent},
  {path:'renquiry/:renquiryId',component:RenquiryComponent},
  


  {path:'renquirylist',component:RenquiryListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
