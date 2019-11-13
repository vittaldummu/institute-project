import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../institute.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-updateinstitute',
  templateUrl: './updateinstitute.component.html',
  styleUrls: ['./updateinstitute.component.css']
})
export class UpdateInstituteComponent implements OnInit {

  formData = {};
  constructor(private instituteService: InstituteService, private router: Router) { }

  //This is for back button
  goBack() {
    this.router.navigateByUrl('instituteList');
  }

  //This is to update the Institute
  updateInstitute() {
    console.log(this.formData);
    this.instituteService.updateInstitute(this.formData).subscribe((updatedData) => {
      if (updatedData) {
        this.router.navigateByUrl('instituteList');
      }
    })
  }

  ngOnInit() {
    //This is for getting the Institute record from service file
    this.formData = this.instituteService.getterInstitute();
    console.log(this.formData);
  }

}
