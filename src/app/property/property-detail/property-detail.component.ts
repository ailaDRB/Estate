import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { AlertifyService } from 'src/app/services/alertify.service';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {



  public propertyId: number;
  property = new Property()  ;
  alertify: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingServices: HousingService ) { }

  ngOnInit() {

    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
        this.housingServices.getProperty(this.propertyId). subscribe(
          (data: Property ) => {
            this.property = data;
          }
        );
      }
    );
  }
  onSubmit() {
    console.log('Bravo, form Submitted');
    this.alertify.success('We are currentley under maintenance your listing will be submitted momentarily, apologies for the inconvenience!');

}
}
