import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  searchKey: any;
  additionalId: string = '';
  ViewImage: any = [];
  setAdditionalId(id: string) {
    this.additionalId = id;
  }

  constructor(private api: ApiService, private fb: FormBuilder, private viewRouter: Router,private logoutRouter:Router) { }
  idForm = this.fb.group({ //form group
    id: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],

  })


  Imageid() {
    if (this.idForm.valid) {
      let id = this.idForm.value.id
      this.api.imageId(id).subscribe((response: any) => {
        alert('Image get it')
      }
      )
    }
    else {
      alert('Invalid imageid Form')
    }
  }


  search(event: any) {
    console.log(event.target.value);
    this.api.searchTerm.next(event.target.value)
  }

  addimageForm = this.fb.group({
    id: ['', Validators.required],
    image: ['', Validators.required],
    discription: ['', Validators.required]

  })
  addImage() {
    if (this.addimageForm.valid) {
      console.log(this.addimageForm.value);
      let id = this.addimageForm.value.id
      let image = this.addimageForm.value.image
      let discription = this.addimageForm.value.discription

      console.log(id,image,discription);
      this.api.uploading(image,id,discription).subscribe((response: any) => {
        console.log(response);
        alert(response.message);
        this.addimageForm.reset();
      },
        (reponse: any) => {
          alert('image already exist')
        }
      )


    } else {
      alert('invalid form')
    }
  }

  user: string = ''//to hold the current user name

  ngOnInit(): void {

    if (localStorage.getItem('currentUser')) {
      this.user = localStorage.getItem('currentUser') || '';
    }
    this.api.viewallImages().subscribe((result: any) => {
      console.log(result.data);
      this.ViewImage = result.data

    });
    // this.searchKey = this.api.searchTerm
    this.api.searchTerm.subscribe((result: any) => {
      this.searchKey = result
      console.log(this.searchKey);

    })


  }

 logout(){
  this.logoutRouter.navigateByUrl('/')
  localStorage.clear()
 }


}
