import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, SelectMultipleControlValueAccessor, Validators } from '@angular/forms';
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
furnishTypes: Array<string> = ['Fully', 'Unfurnished'];
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
    city: '',
    SType: '',
    BType: '',
    propertyTypeId: 0,
    propertyType: '',
    bhk: 0,
    furnishingTypeId: 0,
    furnishingType: '',
    builtArea: 0,
    floorNo: '',
    Address: '',
    cityId: 0,
    readyToMove: false,
    PosteadOn: undefined
  };
  datePipe: any;
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
          Possession: [null, Validators.required],
          age: [null],
          Gated: [null],
          MainEntrance: [null],
          description: [null]
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

    get SellRent() {
      return this.BasicInfo.controls['SellRent'] as FormControl;
  }

  get BHK() {
      return this.BasicInfo.controls['BHK'] as FormControl;
  }

  get PType() {
      return this.BasicInfo.controls['PType'] as FormControl;
  }

  get FType() {
      return this.BasicInfo.controls['FType'] as FormControl;
  }

  get Name() {
      return this.BasicInfo.controls['Name'] as FormControl;
  }

  get city() {
      return this.BasicInfo.controls['city'] as FormControl;
  }

  get Price() {
      return this.PriceInfo.controls['Price ']as FormControl;
  }

  get BuiltArea() {
      return this.PriceInfo.controls['BuiltArea'] as FormControl;
  }

  get carpetarea() {
      return this.PriceInfo.controls['carpetarea'] as FormControl;
  }

  get Security() {
      return this.PriceInfo.controls['Security ']as FormControl;
  }

  get Maintenance() {
      return this.PriceInfo.controls['Maintenance'] as FormControl;
  }

  get floorNo() {
      return this.AddressInfo.controls['floorNo'] as FormControl;
  }

  get TotalFloor() {
      return this.AddressInfo.controls['TotalFloor'] as FormControl;
  }

  get Address() {
      return this.AddressInfo.controls['Address'] as FormControl;
  }

  get LandMark() {
      return this.AddressInfo.controls['LandMark'] as FormControl;
  }

  get RTM() {
      return this.OtherInfo.controls['RTM'] as FormControl;
  }

  get Possession() {
      return this.OtherInfo.controls['Possession'] as FormControl;
  }

  get age() {
      return this.OtherInfo.controls['age'] as FormControl;
  }

  get Gated() {
      return this.OtherInfo.controls['Gated'] as FormControl;
  }

  get MainEntrance() {
      return this.OtherInfo.controls['MainEntrance'] as FormControl;
  }

  get description() {
      return this.OtherInfo.controls['description'] as FormControl;
  }

      //// end get

  mapProperty(): void{
    this.property.SellRent = +this.SellRent.value;
    this.property.bhk = this.BHK.value;
        this.property.propertyTypeId = this.PType.value;
        this.property.Name = this.Name.value;
        this.property.cityId = this.city.value;
        this.property.furnishingTypeId = this.PType.value;
        this.property.price = this.Price.value;
        this.property.Security = this.Security.value;
        this.property.Maintenance = this.MainEntrance.value;
        this.property.builtArea = this.BuiltArea.value;
        this.property.carpetarea = this.carpetarea.value;
        this.property.floorNo = this.floorNo.value;
        this.property.TotalFloor = this.TotalFloor.value;
        this.property.Address = this.Address.value;
        this.property.Address2 = this.LandMark.value;
        this.property.readyToMove = this.RTM.value;
        this.property.gated = this.Gated.value;
        this.property.MainEntrance = this.MainEntrance.value;
        this.property.Possession =
            this.datePipe.transform(this.Possession.value,'MM/dd/yyyy');
        this.property.description = this.description.value;
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
  this.alertify.success('We are currentley under maintenance your listing will be submitted momentarily, apologies for the inconvenience!');

}

selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}

