import { Router } from '@angular/router';
import { RecordClassService } from '../record-class.service';
import { Component } from '@angular/core';
import { RecordClass } from '../recordClass.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-record-class',
  imports: [CommonModule],
  templateUrl: './record-class.component.html',
  styleUrl: './record-class.component.css'
})
export class RecordClassComponent {

  recordClass: RecordClass[] = [];

  constructor(private router: Router, private recordClassService: RecordClassService) { }

  ngOnInit(): void {
    this.recordClassService.getRecordClassses().subscribe((data) => {
      this.recordClass = data;
    });
  }
}
