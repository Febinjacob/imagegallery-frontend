import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginSuccess:boolean = false;
  loginError:string='';
  constructor(private fb:FormBuilder,private api:ApiService,private loginRouter:Router){}
  ngOnInit(): void {
  
  }
  
  loginForm=this.fb.group({ //form group
    acno:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
  })

  login(){
    if(this.loginForm.valid){
      let acno=this.loginForm.value.acno
      let password=this.loginForm.value.password
      this.api.login(acno,password).subscribe((response:any)=>{
        //success
        this.loginSuccess=true
        //to set current username into the localstorage
        localStorage.setItem('currentUser',response.currentUser)
        // alert('Login Successful')
        setTimeout(()=>{
          this.loginRouter.navigateByUrl('/user')
        },2000)
       
      },
      (response:any)=>{
        //error message
        this.loginError=response.error.message
        setTimeout(()=>{
          this.loginForm.reset()
          this.loginError=''
        },2000);
      }
      )
    }
    else{
      alert('Invalid Login Form')
    }
  }
}
