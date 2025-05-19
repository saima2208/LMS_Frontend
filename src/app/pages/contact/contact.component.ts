import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
// contacts:Contact = new Contact();
// isEditMode:boolean =true;


//  constructor(private router: Router) {
//     const nav = this.router.getCurrentNavigation();
//     if (nav?.extras.state && nav.extras.state['contact']) {
//       this.contacts = nav.extras.state['contact'];
//       debugger;

//   }
//   }

//   ngOnInit(): void {
//    // Check if editing an existing course
//     const state = history.state;
//    if (state && state.contact) {
//       this.contacts = state.contact;
//      //  this.isEditMode = true;
//     }
//   }

//   saveContact(): void {
//    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');

//    if (this.isEditMode) {
//      // Update existing course
//      const index = contacts.findIndex((p: Contact) => p.id === this.contacts.id);
//      if (index !== -1) {
//        contacts[index] = this.contacts;
//      }
//    } else {
//      // Add new course
//      this.contacts.id = contacts.length > 0 ? Math.max(...contacts.map((p: Contact) => p.id)) + 1 : 1;
//      contacts.push(this.contacts);
//    }

//    // Save back to localStorage
//    localStorage.setItem('contacts', JSON.stringify(contacts));
//    this.router.navigate(['/faq']); // Navigate back to course list
//  }


contact: Contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private router: Router) {}

  saveContact(): void {
    // Retrieve existing contacts from localStorage
    const contacts: Contact[] = JSON.parse(localStorage.getItem('contacts') || '[]');

    // Add new contact to the array
    contacts.push(this.contact);

    // Save updated array back to localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
    alert("Message sent Successfully")

    // Clear form
    this.contact = { name: '', email: '', message: '' };

    // Navigate to FAQ page
    // this.router.navigate(['/faq']);
  }
}
