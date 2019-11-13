import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component'
import { StudentListComponent } from './student-list/student-list.component'
import { UpdateStudentComponent } from "./update-student/update-student.component";
import { ViewStudentComponent } from "./view-student/view-student.component";
import { AddInstituteComponent } from './add institute/add institute.component'
import { InstituteListComponent } from './institutelist/institutelist.component'
import { UpdateInstituteComponent } from "./updateinstitute/updateinstitute.component";
import { ViewInstituteComponent } from "./viewinstitute/viewinstitute.component";

const routes: Routes = [
    {path : 'addStudent' , component : AddStudentComponent},
    {path : 'studentList' , component : StudentListComponent},
    {path : 'updateStudent' , component : UpdateStudentComponent},
    {path : 'viewStudent' , component : ViewStudentComponent},
    {path : 'addInstitute' , component : AddInstituteComponent},
  {path : 'instituteList' , component : InstituteListComponent},
  {path : 'updateinstitute' , component : UpdateInstituteComponent},
  {path : 'viewinstitute' , component : ViewInstituteComponent}
];

/*const route: Routes = [
  {path : 'addinstitute' , component : AddInstituteComponent},
  {path : 'instituteList' , component : InstituteListComponent},
  {path : 'updateinstitute' , component : UpdateInstituteComponent},
  {path : 'viewinstitute' , component : ViewInstituteComponent}

];*/
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})



export class AppRoutingModule { }
