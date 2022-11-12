import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export  class  ContactListComponent  implements  OnInit {

  public  contacts:any[] = [];
  constructor(public  apiService:  ApiService) { }
  ngOnInit():void {
      this.getContacts();
  }
  public  getContacts(){
    this.apiService.getContacts().subscribe((data: any) => {
        this.contacts  =  data;
        console.log(data);
    });
}
  }
