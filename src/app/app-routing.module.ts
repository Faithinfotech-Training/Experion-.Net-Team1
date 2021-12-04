
import { Component, NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';


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
import { AuthGuard } from './shared/auth.guard';

import { CenquiriesComponent } from './cenquiries/cenquiries.component';
import { CenquiryListComponent } from './cenquiries/cenquiry-list/cenquiry-list.component';
import { CenquiryComponent } from './cenquiries/cenquiry/cenquiry.component';
//import { UpdatecenquiryComponent } from './cenquiries/updatecenquiry/updatecenquiry.component';

import { RenquiriesComponent } from './renquiries/renquiries.component';
import { RenquiryListComponent } from './renquiries/renquiry-list/renquiry-list.component';
import { RenquiryComponent } from './renquiries/renquiry/renquiry.component';
import { UpdaterenquiryComponent } from './renquiries/updaterenquiry/updaterenquiry.component';

import { CordinatorComponent } from './cordinator/cordinator.component';
import { UserComponent } from './users/user/user.component';
<<<<<<< HEAD
import { UsercourselistComponent } from './usercourselist/usercourselist.component';
import { UserresourcelistComponent } from './userresourcelist/userresourcelist.component';
=======
>>>>>>> 17bcfe7f40798fd79b9740224f2630364400437c

import { CenquiryEditComponent } from './cenquiries/cenquiry-edit/cenquiry-edit.component';
import { RenquiryEditComponent } from './renquiries/renquiry-edit/renquiry-edit.component';
import { CenquiryStatusComponent } from './cenquiries/cenquiry-status/cenquiry-status.component';
import { RenquiryStatusComponent } from './renquiries/renquiry-status/renquiry-status.component';
import { RenquiryNewComponent } from './renquiries/renquiry-new/renquiry-new.component';
import { CenquiryNewComponent } from './cenquiries/cenquiry-new/cenquiry-new.component';
<<<<<<< HEAD
import { UserListComponent } from './users/user-list/user-list.component';
import { ChartComponent } from './chart/chart.component';
//import { ChartComponent } from './chart/chart.component';

const routes: Routes = [


  { path: 'resource', component: ResourceComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'resources', component: ResourcesComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'resourcelist', component: ResourceListComponent },
  { path: 'resource/:resourceId', component: ResourceComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'resourcelist/resource', component: ResourceComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course', component: CourseComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'courselist', component: CourseListComponent },
  { path: 'course/:corId', component: CourseComponent },
  { path: 'courselist/course', component: CourseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'manager', component: ManagerComponent, canActivate: [AuthGuard], data: { role: '2' } },
  { path: 'cordinator', component: CordinatorComponent, canActivate: [AuthGuard], data: { role: '3' } },
  { path: 'user', component: UserComponent }, //registration
  { path: 'userlist', component: UserListComponent },
  { path: 'cenquirynew', component: CenquiryNewComponent },
  { path: 'renquirynew', component: RenquiryNewComponent },
  { path: 'cenquiries', component: CenquiriesComponent },
  { path: 'cenquiry', component: CenquiryComponent },
  { path: 'cenquirystatus', component: CenquiryStatusComponent },
  { path: 'cenquirylist', component: CenquiryListComponent },
  { path: 'cenquiryedit', component: CenquiryEditComponent },
  { path: 'renquiryedit', component: RenquiryEditComponent },
  { path: 'cenquiry/:cenquiryId', component: CenquiryComponent },
  { path: 'renquiries', component: RenquiriesComponent },
  { path: 'renquiry', component: RenquiryComponent },
  { path: 'renquiryedit', component: RenquiryComponent },
  { path: 'updaterenquiry', component: UpdaterenquiryComponent },
  { path: 'renquiry/:renquiryId', component: RenquiryComponent },
  { path: 'renquirystatus', component: RenquiryStatusComponent },
  { path: 'cenquiry/:CEnquiryId', component: CenquiryComponent },
=======
import { UsercourselistComponent } from './usercourselist/usercourselist.component';
import { UserresourcelistComponent } from './userresourcelist/userresourcelist.component';

const routes: Routes = [

>>>>>>> 17bcfe7f40798fd79b9740224f2630364400437c
  { path: '', redirectTo: "/home", pathMatch: 'full' },
  { path: 'resource', component: ResourceComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'resources', component: ResourcesComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'resourcelist', component: ResourceListComponent },
  { path: 'resource/:resourceId', component: ResourceComponent, canActivate: [AuthGuard], data: { role: '1' } },
  { path: 'resourcelist/resource', component: ResourceComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course', component: CourseComponent },
  { path: 'courselist', component: CourseListComponent },
  { path: 'course/:corId', component: CourseComponent },
  { path: 'courselist/course', component: CourseComponent },
  { path: 'cenquiries', component: CenquiriesComponent },
<<<<<<< HEAD
  { path: 'cenquiry', component: CenquiryComponent },
  { path: 'cenquirylist', component: CenquiryListComponent },
  { path: 'renquiries', component: RenquiriesComponent },
  { path: 'renquiry', component: RenquiryComponent },
  { path: 'updaterenquiry', component: UpdaterenquiryComponent },
  { path: 'renquiry/:REnquiryId', component: RenquiryComponent },
  { path: 'renquirylist', component: RenquiryListComponent },
  { path: 'renquiries', component: RenquiriesComponent },
  { path: 'renquiry', component: RenquiryComponent },
  { path: 'updaterenquiry', component: UpdaterenquiryComponent },
  { path: 'cenquiryList', component: CenquiryListComponent },
  { path: 'cenquiry/:cenquiryId', component: CenquiryComponent },
  { path: 'renquiries', component: RenquiriesComponent },
  { path: 'renquiry', component: RenquiryComponent },
  { path: 'updateRenquiry', component: UpdaterenquiryComponent },
  { path: 'renquiry/:renquiryId', component: RenquiryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'usercourselist', component: UsercourselistComponent },
  { path: 'userresourcelist', component: UserresourcelistComponent },
=======
  { path: 'cenquiry/:courseId', component: CenquiryComponent },
  
  { path: 'cenquirystatus', component: CenquiryStatusComponent },
  { path: 'cenquirylist', component: CenquiryListComponent },
  { path: 'cenquiryedit',component: CenquiryEditComponent},
  { path: 'renquiryedit',component: RenquiryEditComponent},

  { path: 'cenquiry/:cenquiryId', component: CenquiryComponent },
  { path: 'renquiries', component: RenquiriesComponent },
  { path: 'renquiry', component: RenquiryComponent },
  { path: 'renquiryedit', component: RenquiryComponent },
  { path: 'updaterenquiry', component: UpdaterenquiryComponent },

  { path: 'renquiry/:renquiryId', component: RenquiryComponent },
  { path: 'renquirystatus', component: RenquiryStatusComponent },
  { path: 'cenquiry/:CEnquiryId', component: CenquiryComponent },
  { path: 'usercourselist', component: UsercourselistComponent },
  { path: 'userresourcelist', component: UserresourcelistComponent }
>>>>>>> 17bcfe7f40798fd79b9740224f2630364400437c

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
