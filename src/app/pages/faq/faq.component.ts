import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit{
contacts:Contact[]=[];

constructor(private router: Router,
  private contactService:ContactService
) {}

  ngOnInit(): void {

    this.getMessages();
  }
  getMessages() {
    this.contactService.getAllMessages().subscribe((data) =>{
      this.contacts = data;
    })
  }

}
