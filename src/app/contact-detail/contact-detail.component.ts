import { Component, OnInit } from '@angular/core';
import { ContactsService } from "../contacts/contacts.service";
import { ActivatedRoute } from "@angular/router";
import { Contact } from "../contacts/contact";

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit
{

  contact: Contact;

  constructor(private contactservice: ContactsService, private route: ActivatedRoute) { }

  ngOnInit()
  {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      console.log(id);
      this.contact = this.contactservice.getContact(id);

  }

}
