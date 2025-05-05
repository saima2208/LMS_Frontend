import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  imports: [],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit{
  instructors:Instructor[]=[];

  constructor(private router: Router) {}

    ngOnInit(): void {
      // Load instructors from localStorage
      this.instructors = JSON.parse(localStorage.getItem('instructors') || '[]');
    }

    // Navigate to edit page
    editInstructor(instructor: Instructor): void {
      const id = instructor.id;
      this.router.navigate(['addinstructor'], { state: { instructor } });
    }

    // Delete instructor and update localStorage
    deleteInstructor(instructor: Instructor): void {
      if (confirm('Are you sure you want to delete this instructor?')) {
        this.instructors = this.instructors.filter((p) => p.id !== instructor.id);
        localStorage.setItem('instructors', JSON.stringify(this.instructors));
      }
    }
    addNewInstructor(): void {
      this.router.navigate(['/addinstructor'], { state: { instructor: new Instructor(0, '', '','', '','','','','','') } });
    }
}

export class Instructor{
  id:number;
  name:string;
  fname:string;
  mname:string;
  mobileno:string;
  email:string;
  subject:string;
  address:string;
  image:string;
  details:string

  constructor(id:number,name:string,fname:string,mname:string,mobileno:string,email:string,suject:string,address:string, image:string, details:string){
    this.id=id;
    this.name=name;
    this.fname=fname;
    this.mname=mname;
    this.mobileno=mobileno;
    this.email=email;
    this.subject=suject;
    this.address=address;
    this.image=image;
    this.details=details
  }

}

