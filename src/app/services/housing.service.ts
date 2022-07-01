import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  baseUrl: string;

  addProperty(propertyId: number) {
  ;
  }

  constructor(private http: HttpClient) { }

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray =>{
        return propertiesArray.find(p => p.Id === id)
      })
    )
}

  getAllProperties(SellRent?: number): Observable <IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));

          if(localProperties){
            for (const id in localProperties) {
              if (SellRent){
                if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent){
                    propertiesArray.push(localProperties[id]);
                }
              } else {
                propertiesArray.push(localProperties[id]);
              }
            }
          }

          for (const id in data){
            if (SellRent) {


            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent){
              propertiesArray.push(data[id]);
            }
          } else {
            propertiesArray.push(data[id]);
          }
          }
           return propertiesArray
          })
    );
 }
}
