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
  carpetArea?: number;
  address: string;
  address2?: string;
  CityId: number;
  city: string;
  floorNo?: string;
  totalFloors?: string;
  readyToMove: boolean;
  age?: string;
  mainEntrance?: string;
  security?: number;
  gated?: boolean;
  maintenance?: number;
  estPossessionOn?: string;
  photo?: string;
  description?: string;
  PosteadOn: any;

}