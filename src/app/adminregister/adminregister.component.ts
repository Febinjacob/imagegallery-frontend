import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent {
 
  //to hold error message
  adminRegisterError:string='';
  adminRegisterSuccess: string='';

  constructor(private fb:FormBuilder,private api:ApiService,private adminloginRouter:Router){}
  
  adminregisterForm=this.fb.group({ //form group
    username:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],//formarray
    id:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]],
  })
  //form control passed to html form
  adminregister(){
    if(this.adminregisterForm.valid){
   
    console.log(this.adminregisterForm.value);
    let username=this.adminregisterForm.value.username
    let id=this.adminregisterForm.value.id
    let password=this.adminregisterForm.value.password
    console.log(username,id,password);
    //api call to register
    this.api.adminregister(username,id,password).subscribe((response:any)=>{
      console.log(response);//message
      alert(response.message);//sucess
      this.adminRegisterSuccess=response.message;
      setTimeout(() => {
        //redirect to loginpage
      this.adminloginRouter.navigateByUrl('/adminlogin')
      }, 3000);
      
    },
    (response:any)=>{
      this.adminRegisterError=response.error.message;//error message
      setTimeout(() => {
        this.adminregisterForm.reset();
        this.adminRegisterError='';
      }, 3000);
    }
    )
    
    }
    else{
      alert('Invalid Form')
    }
    
  }
}
