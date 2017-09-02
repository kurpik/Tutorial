import { Injectable } from '@angular/core';
import { Contact } from "./contact";

@Injectable()
export class ContactsService {
  private contacts:Contact[]=[
    {
      username: 'Jan Kowalski',
      id: 1234,
      photo: 'https://vignette1.wikia.nocookie.net/indianajones/images/e/ee/AykroydD_Profile_Photo-e1364842292749-330x360.jpg/revision/latest?cb=20150501230811&path-prefix=pl',
      email: 'Jan.Kowalski@gmail.com',
  
    },
    {
      username: 'Adam Nowak',
      id: 12345,
      photo: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAnUAAAAJGIxZTljODBmLTNiNTEtNDQ0Ny1iNDk4LTQ1YTdiNWUyZjQwMQ.jpg',
      email: 'Adam.Nowak@gmail.com',
    },
    {
      username: 'Justyna Kowalczyk',
      id: 123456,
      photo: 'http://cabincrew24.com/wp-content/uploads/avatars/9394/582f40c27b656-bpfull.jpg',
      email: 'Justyna.Kowalczyk@gmail.com',
    },
    {
      username: 'Michał Wiśniewski',
      id: 1234567,
      photo: 'http://img.interia.pl/rozrywka/nimg/Michal_Wisniewski_Michal_1838415.jpg',
      email: 'Michal.Wisniewski@gmail.com',
    }
  ];

  constructor() { }

  getAll(): Contact[]
  {
    return this.contacts;
  }

  getContact(id:number): Contact
  { 
    return this.contacts.find(elem => elem.id == id);
  }
}

