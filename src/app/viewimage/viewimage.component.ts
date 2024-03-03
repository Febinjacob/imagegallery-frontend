import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.component.html',
  styleUrls: ['./viewimage.component.css']
})
export class ViewimageComponent implements OnInit {

  additionalId: string = ''; 
  searchKey: string = '';

  ViewImage: any = [];

  constructor(private api: ApiService) { }
  search(event: any) {
    console.log(event.target.value);
    this.api.searchTerm.next(event.target.value)
  }

  ngOnInit(): void {
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


}
