import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeServiceService {
  students = [
    {
      id: 101,
      name: 'Alex',
      description: 'Alex Details',
      email: 'alex@gmail.com',
    },
    {
      id: 202,
      name: 'Bob',
      description: 'Bob Details',
      email: 'bob@gmail.com',
    },
    {
      id: 303,
      name: 'Charlie',
      description: 'Charlie Details',
      email: 'charlie@gmail.com',
    },
    {
      id: 404,
      name: 'Dan',
      description: 'Dan Details',
      email: 'daniels@gmail.com',
    },
    {
      id: 505,
      name: 'Eve',
      description: 'Eve Details',
      email: 'eve@gmail.com',
    },
    {
      id: 606,
      name: 'Fred',
      description: 'Fred Details',
      email: 'fred@gmail.com',
    },
  ];
  constructor() {}

  // Retrieve & display all students in the course.
  public getStudents(): Array<{
    id: any;
    name: any;
    description: any;
    email: any;
  }> {
    return this.students;
  }

  // Enroll new students into the course.
  public createStudent(students: {
    id: any;
    name: any;
    description: any;
    email: any;
  }) {
    this.students.push(students);
  }
}
