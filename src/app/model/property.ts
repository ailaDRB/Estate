import { IPropertyBase } from './ipropertybase';

export class Property implements IPropertyBase {
  Id: number;
  SellRent: number;
  Name: string;
  PType: string;
  FType: string;
  SType: string;
  BType: string;
  Price: number;
  BHK: number;
  BuiltArea: number;
  City: string;
  Image?: string;
  id: number;
  sellRent: number;
  name: string;
  propertyTypeId: number;
  propertyType: string;
  bhk: number;
  furnishingTypeId: number;
  furnishingType: string;
  price: number;
  builtArea: number;
  carpetarea?: number;
  Address: string;
  Address2?: string;
  CityId: number;
  floorNo?: string;
  TotalFloor?: string;
  readyToMove: boolean;
  age?: string;
  MainEntrance?: string;
  Security?: number;
  gated?: boolean;
  Maintenance?: number;
  Possession?: string;
  photo?: string;
  description?: string;
  PosteadOn: any;

}
