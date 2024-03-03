import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-user',
  templateUrl: './admin-view-user.component.html',
  styleUrls: ['./admin-view-user.component.css']
})
export class AdminViewUserComponent implements OnInit{
  adminviewUser:any=[];
  constructor(private api:ApiService,private adminviewuserRouter:Router,private logoutRouter:Router){}
  ngOnInit(): void {
    this.api.viewallUser().subscribe((result:any)=>{
      console.log(result.data);
      this.adminviewUser = result.data
      
      
     })
    
  }
  removeuser(id:any){
    this.api.adminremoveUser(id).subscribe((data:any)=>{
      console.log(data);
      alert(data.message)
      this.adminviewuserRouter.navigateByUrl('adminview')
      
    },
    (data)=>{
      alert(data.error)
    }
    )
  }
  logout(){
    this.logoutRouter.navigateByUrl('/')
    localStorage.clear()
   }
}
