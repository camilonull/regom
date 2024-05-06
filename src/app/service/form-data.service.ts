import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  formData: any = {}; // Aquí puedes inicializar cualquier estructura de datos que desees

  constructor() { }

  setFormData(data: any) {
    this.formData = { ...this.formData, ...data };
  }

  getFormData() {
    return this.formData;
  }
}
