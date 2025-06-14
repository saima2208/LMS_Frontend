import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../services/contact.service';



@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacts: Contact = new Contact();
  // contact: Contact[] = [];
  constructor(private router: Router,
     private contactService: ContactService
    // private toastr: ToastrService
  ) { }
  saveContact(): void {
    this.addContact();
  }
  addContact(): void {
    this.contactService.addContact(this.contacts).subscribe({
      next: () => {
        // this.toastr.success("Message sent successfully");
        alert('Message sent successfull');
        this.router.navigate(['/faq']);
        this.resetForm();
      },
      error: (err) => {
        // this.toastr.error('Failed to submit message' + err.message);
        alert('Failed to submit message' + err.message);
        console.error(err);
      },
    });
  }
  resetForm() {
    this.contacts = new Contact();
  }

}
