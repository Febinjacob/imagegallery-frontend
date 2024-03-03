import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { FilterPipe } from './imagegallery/pipes/filter.pipe';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { AdminViewUserComponent } from './admin-view-user/admin-view-user.component';

 
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    PageNotFoundComponent,
    UserComponent,
    ViewimageComponent,
    FilterPipe,
    AdminComponent,
    AboutComponent,
    AdminloginComponent,
    AdminregisterComponent,
    AdminviewComponent,
    AdminViewUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
