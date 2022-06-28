import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';






@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  //@ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  addPropertyForm: FormGroup;
  nextClicked: boolean;

// Will come from masters
propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IPropertyBase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    PType: null,
    FType: '',
    BHK: 0,
    BuiltArea: 0,
    City: ''

  };

  constructor(private fb:FormBuilder,  private router: Router) { }

  ngOnInit() {
    this.CreateAddPropertyForm();

  }

  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
        BasicInfo: this.fb.group({
            SellRent: ['1' , Validators.required],
            PType: [null, Validators.required],
            FType: [null, Validators.required],
            Name: [null, Validators.required],
            City: [null, Validators.required]
          }),
          PriceInfo: this.fb.group({
            Price: [null, Validators.required],
            BuiltArea: [null, Validators.required],
            CarpetArea: [null],
                Security: [0],
                Maintenance: [0],
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
  return this.addPropertyForm.controls ['PriceInfo'] as FormGroup;
}
get AddressInfo() {
  return this.addPropertyForm.controls['AddressInfo']as FormGroup;
}

get OtherInfo() {
  return this.addPropertyForm.controls['OtherInfo'] as FormGroup;
}
// end get


onBack() {
  this.router.navigate(['/']);
}

onSubmit() {
  this.nextClicked = true;
  if (this.BasicInfo.invalid){
    this.formTabs.tabs[0].active = true;
    return;
  }
  if (this.PriceInfo.invalid){
    this.formTabs.tabs[1].active = true;
    return;
  }

  console.log('Bravo, form Submitted');
  console.log ('SellRent='+ this.addPropertyForm.value.BasicInfo.SellRent)
  console.log(this.addPropertyForm);
}

selectTab(tabId: number) {
  this.nextClicked = true;
    this.formTabs.tabs[tabId].active = true;
  }

}
function PossessionOn() {
  throw new Error('Function not implemented.');
}

