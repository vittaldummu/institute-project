import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
// import { Observable } from 'rxjs/Observable';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  formData = {};

  constructor(private studentService : StudentService, private router:Router) { }



  //This is for adding the new student
  addStudent(){
    console.log(this.formData);
    this.studentService.saveStudent(this.formData).subscribe((responseFromService)=>{
      console.log(responseFromService);
      if(responseFromService){
        this.router.navigateByUrl('studentList');
      }
    })

  }

  ngOnInit() {
  }

}
