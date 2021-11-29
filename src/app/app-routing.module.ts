import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourcesComponent } from './resources/resources.component';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [

  {path:'', redirectTo:"/login",pathMatch: 'full'},
  //{path:'post', component: PostComponent},
  {path:'resource', component: ResourceComponent},
  {path:'resources',component:ResourcesComponent},
  {path:'resourcelist',component: ResourceListComponent},
  //{path:'postlist',component: PostListComponent},
  {path:'resource/:resourceId', component: ResourceComponent},
  {path:'resourcelist/resource',component: ResourceComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path:'manager', component: ManagerComponent,canActivate:[AuthGuard],data:{role:'2'}},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
