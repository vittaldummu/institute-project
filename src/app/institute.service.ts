import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InstituteService {

  instituteFormData = {};
  constructor(private http : Http) { }

  saveInstitute(formData){
    console.log(formData);
    return this.http.post('/institute/saveInstitute', formData).map(function(response){
      console.log("resonse in institute    "+response);
      if(response){
        let newData = response.json();
        return newData;
      }
    })
  }

//this is for getting the inistitute list
  getInstitute(){
    console.log('---- in the  inistitute list service ---');
    return this.http.get('/institute/instituteList').map(function(response){
     console.log(response);
      let newData = response.json();
     console.log(newData);
     if(newData.success){
       return newData.instituteData;
     }
    })
  }

   updateInstitute(formData){
    console.log(formData);
    return this.http.post('/institute/updateInstitute', formData).map(function(response){
      if(response){
        let newData = response.json();
        return newData.responseAfterUpdation;
      }
    })
  }


  setterInstitute(institute){
    this.instituteFormData = institute;
  }
  getterInstitute(){
   return this.instituteFormData;
  }

}
