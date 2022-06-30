import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';
import { Property } from 'src/app/model/property';
import { AlertifyService } from 'src/app/services/alertify.service';
import { HousingService } from 'src/app/services/housing.service';






@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  addPropertyForm: FormGroup;
  property = new Property();

// Will come from masters
propertyTypes: Array<string> = ['Office', 'Warehouse', 'Land', 'Delivery center'];
furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
sellingTypes: Array<string> = ['Sale','Rent']


  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType: '',
    BHK: 0,
    BuiltArea: 0,
    City: '',
    SType: '',
    BType: '',
  };
  SellRent: any;
  BHK: any;
  PType: any;
  Name: any;
  City: any;
  Price: any;
  Security: any;
  datePipe: any;
  Description: any;
  PossessionOn: any;
  MainEntrance: any;
  Gated: any;
  RTM: any;
  LandMark: any;
  Address: any;
  TotalFloor: any;
  FloorNo: any;
  CarpetArea: any;
  BuiltArea: any;

  /////



  constructor(private fb:FormBuilder,
               private router: Router,
               private housingService: HousingService,
               private alertify: AlertifyService) { }

  ngOnInit() {
    this.CreateAddPropertyForm();


  }

    CreateAddPropertyForm(){
      this.addPropertyForm = this.fb.group({
          BasicInfo: this.fb.group({
            SellRent: ['1' , Validators.required],
            PType: [null, Validators.required],
            Name: [null, Validators.required],
          }),
          PriceInfo: this.fb.group({
            Price: [null, Validators.required],
            BuiltArea: [null, Validators.required]
        }),

        AddressInfo: this.fb.group({
          FloorNo: [null],
          TotalFloor: [null],
          Address: [null, Validators.required],
          LandMark: [null],
      }),

      OtherInfo: this.fb.group({
          RTM: [null, Validators.required],
          PossessionOn: [null, Validators.required],
          AOP: [null],
          Gated: [null],
          MainEntrance: [null],
          Description: [null]
      })
      });
      }
      /// get
      get BasicInfo() {
        return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
    }

    get PriceInfo() {
        return this.addPropertyForm.controls['PriceInfo'] as FormGroup;
    }

    get AddressInfo() {
        return this.addPropertyForm.controls['AddressInfo'] as FormGroup;
    }

    get OtherInfo() {
        return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
    }
      //// end get

  mapProperty(): void{
    this.property.SellRent = +this.SellRent.value;
    this.property.bhk = this.BHK.value;
        this.property.propertyTypeId = this.PType.value;
        this.property.name = this.Name.value;
        this.property.CityId = this.City.value;
        this.property.furnishingTypeId = this.PType.value;
        this.property.price = this.Price.value;
        this.property.security = this.Security.value;
        this.property.maintenance = this.MainEntrance.value;
        this.property.builtArea = this.BuiltArea.value;
        this.property.carpetArea = this.CarpetArea.value;
        this.property.floorNo = this.FloorNo.value;
        this.property.totalFloors = this.TotalFloor.value;
        this.property.address = this.Address.value;
        this.property.address2 = this.LandMark.value;
        this.property.readyToMove = this.RTM.value;
        this.property.gated = this.Gated.value;
        this.property.mainEntrance = this.MainEntrance.value;
        this.property.estPossessionOn =
            this.datePipe.transform(this.PossessionOn.value,'MM/dd/yyyy');
        this.property.description = this.Description.value;
  }

///
allTabsValid(): boolean {
  if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
  }

  if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
  }

  if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
  }

  if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
  }
  return true;
}


onBack() {
  this.router.navigate(['/']);
}

onSubmit() {

  console.log('Bravo, form Submitted');
  console.log ('SellRent='+ this.addPropertyForm.value.BasicInfo.SellRent)
  console.log(this.addPropertyForm);

}

selectTab(tabId: number) {
 this.formTabs.tabs[tabId].active = true;
  }
}

