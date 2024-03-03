import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminloginSuccess:boolean = false;
  adminloginError:string='';
  constructor(private fb:FormBuilder,private api:ApiService,private adminloginRouter:Router){}
  ngOnInit(): void {
    
  }
  adminloginForm=this.fb.group({ //form group
    id:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
  })
  adminlogin(){
    if(this.adminloginForm.valid){
      let id=this.adminloginForm.value.id
      let password=this.adminloginForm.value.password
      this.api.adminlogin(id,password).subscribe((response:any)=>{
        //success
        this.adminloginSuccess=true
        //to set current username into the localstorage
        localStorage.setItem('currentUser',response.currentUser)
        // alert('Login Successful')
        setTimeout(()=>{
          this.adminloginRouter.navigateByUrl('/adminview')
        },2000)
       
      },
      (response:any)=>{
        //error message
        this.adminloginError=response.error.message
        setTimeout(()=>{
          this.adminloginForm.reset()
          this.adminloginError=''
        },2000);
      }
      )
    }
    else{
      alert('Invalid Login Form')
    }
  }

}
