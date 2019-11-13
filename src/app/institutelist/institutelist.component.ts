import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../institute.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-institutelist',
  templateUrl: './institutelist.component.html',
  styleUrls: ['./institutelist.component.css']
})
export class InstituteListComponent implements OnInit {

  instituteList = [];

  constructor(private instituteService: InstituteService, private router: Router) { }

  //This is for taking the Institute record for view.
  viewInstitute(institute) {
    this.instituteService.setterInstitute(institute);
    this.router.navigateByUrl('viewInstitute');
  }

  //This is for Adding the new Institute
  addInstitute(){
    this.router.navigateByUrl('addInstitute');
  }

  //This is for taking the Institute record for updation.
  updateInstitute(institute) {
    this.instituteService.setterInstitute(institute);
    this.router.navigateByUrl('updateInstitute');
  }

  //This is for taking the Institute record for deletion.
  deleteInstitute() { }

  ngOnInit() {
    //This is for desplaying the Institute record.
    console.log("---------- in the Institute list component -------")
    this.instituteService.getInstitute().subscribe((responseFromService) => {
      console.log(responseFromService)
      this.instituteList = responseFromService;
    })
  }

}
