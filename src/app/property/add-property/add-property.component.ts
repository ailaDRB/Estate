import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface'

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm: NgForm;
@ViewChild('formTabs') formTabs: TabsetComponent;

// Will come from masters
propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  SellRent= '1';

  tempProp ={}
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.addPropertyForm.controls['Name'].setValue('Default Value');
    });
  }
onBack() {
  this.router.navigate(['/']);
}

onSubmit(Form : NgForm) {
  console.log('Bravo, form Submitted');
  console.log(this.addPropertyForm);
}

selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

}
