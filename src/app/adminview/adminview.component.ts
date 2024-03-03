import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  adminviewImage:any=[];
  

  constructor(private api:ApiService, private adminviewRouter:Router,private logoutRouter:Router){}
  ngOnInit(): void {
   this.api.adminviewallImages().subscribe((result:any)=>{
    console.log(result.data);
    this.adminviewImage = result.data
    
    
   })


  }
  deleting(id:any){
    this.api.admindeleteImages(id).subscribe((data:any)=>{
      console.log(data);
      alert(data.message)
      this.adminviewRouter.navigateByUrl('adminviewuser')
      
      
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

