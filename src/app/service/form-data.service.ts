import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  dataWork: any = {};
  dataOrigin: any = {};
  dataTec: any = {};
  dataMessage: any = {};
  dataStyle: any = {};
  dataMat: any = {};
  dataTypeWork: any = {};
  dataSurface: any = {};
  dataLocation: any = {};
  dataDocument: any = {};
  dataContext: any = {};
  dataRestau: any = {};
  dataProfile: any = {};

  idUnique: number = JSON.parse(localStorage.getItem('idUnique') ?? '0');

  constructor() {
    this.dataWork = JSON.parse(localStorage.getItem('dataWork') ?? '{}');
    this.dataOrigin = JSON.parse(localStorage.getItem('dataOrigin') ?? '{}');
    this.dataTec = JSON.parse(localStorage.getItem('dataTec') ?? '{}');
    this.dataMessage = JSON.parse(localStorage.getItem('dataMessage') ?? '{}');
    this.dataStyle = JSON.parse(localStorage.getItem('dataStyle') ?? '{}');
    this.dataMat = JSON.parse(localStorage.getItem('dataMat') ?? '{}');
    this.dataTypeWork = JSON.parse(localStorage.getItem('dataTypeWork') ?? '{}');
    this.dataSurface = JSON.parse(localStorage.getItem('dataSurface') ?? '{}');
    this.dataLocation = JSON.parse(localStorage.getItem('dataLocation') ?? '{}');
    this.dataContext = JSON.parse(localStorage.getItem('dataContext') ?? '{}');
    this.dataRestau = JSON.parse(localStorage.getItem('dataRestau') ?? '{}');
    this.dataDocument = JSON.parse(localStorage.getItem('dataDotument') ?? '{}');
    this.dataProfile = JSON.parse(localStorage.getItem('dataProfile') ?? '{}');
   }

   setDataProfile(data: any) {
    this.dataProfile = { ...this.dataProfile, ...data };
    localStorage.setItem('dataDocument', JSON.stringify(this.dataProfile));
  }
  getDataProfile() {
    return this.dataProfile;
  }

  setDataDocument(data: any) {
    this.dataDocument = { ...this.dataDocument, ...data };
    localStorage.setItem('dataDocument', JSON.stringify(this.dataDocument));
  }
  getDataDocument() {
    return this.dataDocument;
  }

  setDataWork(data: any) {
    this.dataWork = { ...this.dataWork, ...data };
    localStorage.setItem('dataWork', JSON.stringify(this.dataWork));
  }
  getDataWork() {
    return this.dataWork;
  }

  setDataOrigin(data: any) {
    this.dataOrigin = { ...this.dataOrigin, ...data };
    localStorage.setItem('dataOrigin', JSON.stringify(this.dataOrigin));
  }
  getDataOrigin() {
    return this.dataOrigin;
  }

  setDataTec(data: any) {
    this.dataTec = { ...this.dataTec, ...data };
    localStorage.setItem('dataTec', JSON.stringify(this.dataTec));
  }
  getDataTec() {
    return this.dataTec;
  }

  setDataMessage(data: any) {
    this.dataMessage = { ...this.dataMessage, ...data };
    localStorage.setItem('dataMessage', JSON.stringify(this.dataMessage));
  }
  getDataMessage() {
    return this.dataMessage;
  }

  setDataStyle(data: any) {
    this.dataStyle = { ...this.dataStyle, ...data };
    localStorage.setItem('dataStyle', JSON.stringify(this.dataStyle));
  }
  getDataStyle() {
    return this.dataStyle;
  }

  setDataMat(data: any) {
    this.dataMat = { ...this.dataMat, ...data };
    localStorage.setItem('dataMat', JSON.stringify(this.dataMat));
  }
  getDataMat() {
    return this.dataMat;
  }

  setDataTypeWork(data: any) {
    this.dataTypeWork = { ...this.dataTypeWork, ...data };
    localStorage.setItem('dataTypeWork', JSON.stringify(this.dataTypeWork));
  }
  getDataTypeWork() {
    return this.dataTypeWork;
  }

  setDataSurface(data: any) {
    this.dataSurface = { ...this.dataSurface, ...data };
    localStorage.setItem('dataSurface', JSON.stringify(this.dataSurface));
  }
  getDataSurface() {
    return this.dataSurface;
  }

  setDataLocation(data: any) {
    this.dataLocation = { ...this.dataLocation, ...data };
    localStorage.setItem('dataLocation', JSON.stringify(this.dataLocation));
  }
  getDataLocation() {
    return this.dataLocation;
  }

  setDataContext(data: any) {
    this.dataContext = { ...this.dataContext, ...data };
    localStorage.setItem('dataContext', JSON.stringify(this.dataContext));
  }
  getDataContext() {
    return this.dataContext;
  }

  setDataRestau(data: any) {
    this.dataRestau = { ...this.dataRestau, ...data };
    localStorage.setItem('dataRestau', JSON.stringify(this.dataRestau));
  }
  getDataRestau() {
    return this.dataRestau;
  }

  setIdUnique(value: number) {
    if (this.idUnique === 0) {
      this.idUnique = value;
      localStorage.setItem('idUnique', value.toString());
    }
  }
  getIdUnique(): number {
    return this.idUnique;
  }

  getIdUniqueJson(): { id: number } {
    return { id: this.idUnique };
  }

  resetIdUnique() {
    this.idUnique = 0;
    localStorage.setItem('idUnique', '0');
  }

}
