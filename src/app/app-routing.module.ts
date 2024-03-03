import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminViewUserComponent } from './admin-view-user/admin-view-user.component';

const routes: Routes = [
  //main - loacalhost://4200 - main page
  {
    path:'',component:MainComponent
  },
  //login - loacalhost://4200 - login page
  {
    path:'login',component:LoginComponent
  },
  //register - loacalhost://4200 - register page
  {
    path:'login/register',component:RegisterComponent
  },
  //user - loacalhost://4200 - user page
  {
    path:'user',component:UserComponent
  }, 
  {
   path:'about',component:AboutComponent
  },
  //admin - loacalhost://4200 - user page
  {
   path:'admin',component:AdminComponent
  },
  {
   path:'adminlogin',component: AdminloginComponent
  },
  {
   path:'adminviewuser',component:AdminViewUserComponent
  },
  {
   path:'adminregister',component:AdminregisterComponent
  },
  {
   path:'adminview',component:AdminviewComponent
  },
  //view - loacalhost://4200 - view page
  {
   path:'viewimage',component:ViewimageComponent
  },
  //pagenotfound - loacalhost://4200 - pagenotfound page
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
