import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css'],
})
export class StudentCreateComponent implements OnInit {
  student: { id: any; name: string; description: string; email: string } = {
    id: null,
    name: '',
    description: '',
    email: '',
  };

  constructor(public homeService: HomeServiceService) {}

  ngOnInit(): void {}
  
  public createStudent() {
    console.log('Student -->>', this.student);
    this.homeService.createStudent(this.student);
    this.student = { id: null, name: '', description: '', email: '' };
  }
}
