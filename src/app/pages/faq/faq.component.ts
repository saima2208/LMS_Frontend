import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit{
contacts:Contact[]=[];

constructor(private router: Router) {}

  ngOnInit(): void {
    // Load contact message from localStorage
    this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  }

}
