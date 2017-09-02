import { Component, OnInit } from '@angular/core';
import { ContactsService } from "./contacts.service";
import { Contact } from "./contact";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[]=[];
  

  constructor(private contactservice: ContactsService, private router: Router) { }

  ngOnInit() 
  {
    this.contacts = this.contactservice.getAll();
  }
  openDetails(id:number)
  {
    console.log(id);
    this.router.navigate(['contacts', id]);
  }

}
