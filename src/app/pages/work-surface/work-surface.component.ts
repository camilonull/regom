import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountryService} from '../../service/country.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../../service/form-data.service';

@Component({
  selector: 'app-work-surface',
  templateUrl: './work-surface.component.html',
  styleUrl: './work-surface.component.css'
})
export class WorkSurfaceComponent implements OnInit{
opciones: string[] = ['Otro', 'Opción 2', 'Opción 3', 'Opción 4'];

  optionSurface: string = '';
  optionMat: string = '';


  isFormSurface: boolean = false;
  isFormMat: boolean = false;

  surfaceForm: FormGroup;
  matForm: FormGroup;


  constructor(private _router:Router, private _formData: FormDataService) {
    this.surfaceForm = new FormGroup({
      surface: new FormControl("", [Validators.required]),
      surfaceOther: new FormControl("", [])
    });
    this.matForm = new FormGroup({
      mat: new FormControl("", [Validators.required]),
      matOther: new FormControl("", [])
    });

  }
  ngOnInit(): void {
    const formDataSurface = this._formData.getDataSurface();
    if (formDataSurface) {
      this.surfaceForm.patchValue(formDataSurface);
    }

    const formDataMat = this._formData.getDataMat();
    if (formDataMat) {
      this.matForm.patchValue(formDataMat);
    }
  }

  onChangeSurface(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.optionSurface = value;
  }

  onChangeMat(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.optionMat = value;
  }

  onSubmit(){

    const isFormSurface = this.surfaceForm.valid;
    const isFormMat = this.matForm.valid;


    this.isFormSurface = !isFormSurface;
    this.isFormMat = !isFormMat;
    if(isFormSurface && isFormMat){

      const idJSON = this._formData.getIdUniqueJson();
      let formDataJSON = this.surfaceForm.value;
      this._formData.setDataSurface(idJSON);
      this._formData.setDataSurface(formDataJSON);

      formDataJSON = this.matForm.value;
      this._formData.setDataMat(idJSON);
      this._formData.setDataMat(formDataJSON);
      console.log(this._formData.getDataSurface(), this._formData.getDataMat());
      this._router.navigateByUrl('/work-origin');
    }
  }

  back(){
    this._router.navigateByUrl('/work-item');
  }

}
