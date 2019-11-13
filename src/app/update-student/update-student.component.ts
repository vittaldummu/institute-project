import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  formData = {};
  constructor(private studentService: StudentService, private router: Router) { }

  //This is for back button
  goBack() {
    this.router.navigateByUrl('studentList');
  }

  //This is to update the student
  updateStudent() {
    console.log(this.formData);
    this.studentService.updateStudent(this.formData).subscribe((updatedData) => {
      if (updatedData) {
        this.router.navigateByUrl('studentList');
      }
    })
  }

  ngOnInit() {
    //This is for getting the student record from service file
    this.formData = this.studentService.getterStudent();
    console.log(this.formData);
  }

}
