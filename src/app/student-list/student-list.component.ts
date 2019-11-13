import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList = [];

  constructor(private studentService: StudentService, private router: Router) { }

  //This is for taking the student record for view.
  viewStudent(student) {
    this.studentService.setterStudent(student);
    this.router.navigateByUrl('viewStudent');
  }

  //This is for Adding the new student
  addStudent(){
    this.router.navigateByUrl('addStudent');
  }

  //This is for taking the student record for updation.
  updateStudent(student) {
    this.studentService.setterStudent(student);
    this.router.navigateByUrl('updateStudent');
  }

  //This is for taking the student record for deletion.
  deleteStudent() { }

  ngOnInit() {
    //This is for desplaying the student record.
    console.log("---------- in the student list component -------")
    this.studentService.getStudent().subscribe((responseFromService) => {
      console.log(responseFromService)
      this.studentList = responseFromService;
    })
  }

}
