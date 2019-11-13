import { Component, OnInit } from '@angular/core';
import { InstituteService } from '../institute.service';
import { Router , ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from '../app.routing';

@Component({
  selector: 'app-viewinstitute',
  templateUrl: './viewinstitute.component.html',
  styleUrls: ['./viewinstitute.component.css']
})
export class ViewInstituteComponent implements OnInit {

  formData = {};
  constructor(private instituteService : InstituteService, private router:Router) { }

  //This is for goback
  goBack(){
    this.router.navigateByUrl('instituteList');
  }

  ngOnInit() {
    //This is for getting the Institute record from service file
    this.formData =  this.instituteService.getterInstitute();
  }

}
