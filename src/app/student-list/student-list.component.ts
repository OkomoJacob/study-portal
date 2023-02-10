import { HomeServiceService } from './../services/home-service.service';
import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  student: any;
  selectedStudent: any;

  constructor(public homeService: HomeServiceService) { }

  ngOnInit(): void {
  }

  public selectStudent(student: any){
    this.selectedStudent = student;
  }

}
