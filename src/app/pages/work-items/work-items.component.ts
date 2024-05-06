
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../../service/form-data.service';

@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrl: './work-items.component.css'
})
export class WorkItemsComponent implements OnInit{
  opciones: string[] = ['Otro', 'Opción 2', 'Opción 3', 'Opción 4'];


  optionStyle: string = '';
  optionTec: string = '';
  optionWork: string = '';

  isFormStyle: boolean = false;
  isFormTec: boolean = false;
  isFormType: boolean = false;


  styleForm: FormGroup;
  tecForm: FormGroup;
  typeWorkForm: FormGroup;

  constructor(private _router:Router, private _formData: FormDataService){


    this.styleForm = new FormGroup({
      styleType: new FormControl("", [Validators.required]),
      otherStyle: new FormControl("", [])
    });

    this.tecForm = new FormGroup({
      tec: new FormControl("", [Validators.required]),
      otherTec: new FormControl("", [])
    });

    this.typeWorkForm = new FormGroup({
      typeWork: new FormControl("", [Validators.required]),
      otherTypeWork: new FormControl("", [])
    });


  }
  onChangeStyle(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.optionStyle = value;
  }

  onChangeTec(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.optionTec = value;
  }

  onChangeTypeWork(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.optionWork = value;
  }


  ngOnInit(): void {
    const formDataStyle = this._formData.getDataStyle();
    if (formDataStyle) {
      this.styleForm.patchValue(formDataStyle);
    }

    const formDataTec = this._formData.getDataTec();
    if (formDataTec) {
      this.tecForm.patchValue(formDataTec);
    }

    const formDataTypeWork = this._formData.getDataTypeWork();
    if (formDataTypeWork) {
      this.typeWorkForm.patchValue(formDataTypeWork);
    }
  }


  onSubmit(){

    const isFormStyle = this.styleForm.valid;
    const isFormTec = this.tecForm.valid;
    const isFormType = this.typeWorkForm.valid;

    this.isFormStyle = !isFormStyle;
    this.isFormTec = !isFormTec;
    this.isFormType = !isFormType;
    if(isFormStyle && isFormTec && isFormType){
      const idJSON = this._formData.getIdUniqueJson();
      let formDataJSON = this.styleForm.value;
      this._formData.setDataStyle(idJSON);
      this._formData.setDataStyle(formDataJSON);

      formDataJSON = this.tecForm.value;
      this._formData.setDataTec(idJSON);
      this._formData.setDataTec(formDataJSON);

      formDataJSON = this.typeWorkForm.value;
      this._formData.setDataTypeWork(idJSON);
      this._formData.setDataTypeWork(formDataJSON);

      console.log(this._formData.getDataStyle(), this._formData.getDataTec(), this._formData.getDataTypeWork());
      this._router.navigateByUrl('/work-surface');
    }
  }

  back(){
    this._router.navigateByUrl('/work');
  }
}
