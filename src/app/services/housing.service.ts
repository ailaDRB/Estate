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
    return this.http.get<Property>(this.baseUrl + '/property/detail/'+id.toString());
}

  getAllProperties(SellRent?: number): Observable <IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IPropertyBase> = [];
{
          for (const id in data){
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent){
              propertiesArray.push(data[id]);
            }
          }
           return propertiesArray
          }})
    );
 }
}
