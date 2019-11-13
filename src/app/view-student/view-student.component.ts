import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  formData = {};
  constructor(private studentService : StudentService, private router:Router) { }

  //This is for goback
  goBack(){
    this.router.navigateByUrl('studentList');
  }

  ngOnInit() {
    //This is for getting the student record from service file
    this.formData =  this.studentService.getterStudent();
  }

}
