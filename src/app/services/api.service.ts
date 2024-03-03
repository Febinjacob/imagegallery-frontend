import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchTerm = new BehaviorSubject('');//to hold search value
  //using behaviorsubject to pass stream of data from one component to another

  constructor(private http: HttpClient) { }

  //register api function
  register(username: any, acno: any, password: any) {
    const body = {
      username,
      acno,
      password

    }
    return this.http.post('http://localhost:5000/register', body)
  }

  //login api function
  login(acno: any, password: any) {
    const body = {
      acno,
      password
    }
    return this.http.post('http://localhost:5000/login', body)
  }

  //adminregister api function
  adminregister(username: any, id: any, password: any) {
    const body = {
      username,
      id,
      password

    }
    return this.http.post('http://localhost:5000/adminregister', body)
  }
  //adminlogin api function
  adminlogin(id: any, password: any) {
    const body = {
      id,
      password
    }
    return this.http.post('http://localhost:5000/adminlogin', body)
  }

  //image uploading
  uploading(image: any, id: any, discription: any) {
    const body = {
      image,
      id,
      discription

    }
    return this.http.post('http://localhost:5000/addImage', body)
  }

  //view all images

  viewallImages() {
    return this.http.get('http://localhost:5000/viewImage')
  }

  // view all users
  viewallUser() {
    return this.http.get('http://localhost:5000/adminviewUser')
  }

  //admin delete images
  admindeleteImages(id:any){
    return this.http.delete(`http://localhost:5000/deleteImages/${id}`)
  }

  //admin remove User
  adminremoveUser(id:any){
    return this.http.delete(`http://localhost:5000/deleteUser/${id}`)
  }

  //image id view
  imageId(id: any) {
    const body = {
      id,

    }
    return this.http.post('http://localhost:5000/user', body)
  }


  adminviewallImages() {
    return this.http.get('http://localhost:5000/adminviewImage')
  }
}


