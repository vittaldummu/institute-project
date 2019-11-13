import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  studentFormData = {};
  constructor(private http : Http) { }

  saveStudent(formData){
    console.log(formData);
    return this.http.post('/student/saveStudent', formData).map(function(response){

      if(response){
        let newData = response.json();
        return newData;
      }
    })
  }

//this is for getting the student list
  getStudent(){
    console.log('---- in the student list service ---');
    return this.http.get('/student/studentList').map(function(response){
     console.log(response);
      let newData = response.json();
     console.log(newData);
     if(newData.success){
       return newData.studentData;
     }
    })
  }

   updateStudent(formData){
    console.log(formData);
    return this.http.post('/student/updateStudent', formData).map(function(response){
      if(response){
        let newData = response.json();
        return newData.responseAfterUpdation;
      }
    })
  }


  setterStudent(student){
    this.studentFormData = student;
  }
  getterStudent(){
   return this.studentFormData;
  }

}
