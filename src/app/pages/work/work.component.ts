import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGoogleService } from '../../service/auth-google.service';
import { FormDataService } from '../../service/form-data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent implements OnInit{



  workForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private _router: Router, private _authGoogle: AuthGoogleService, private _formData: FormDataService){
    this.workForm = new FormGroup({
      title: new FormControl("",[Validators.required]),
      dataCreate: new FormControl(new Date()),
      description: new FormControl("",[Validators.required]),
      higt: new FormControl("",[Validators.required]),
      broad: new FormControl("",[Validators.required]),
      deth: new FormControl("")
    })
  }
  ngOnInit(): void {
    console.log(this._formData.getIdUnique());
    this._formData.setIdUnique(this.generateNumericId());
    const formData = this._formData.getDataWork();
    if (formData) {
      this.workForm.patchValue(formData);
    }
  }



  onSubmit(){
    const isFormValid = this.workForm.valid;
    this.isFormSubmitted = !isFormValid;
    console.log(this._formData.getDataWork());
    if(isFormValid){

      const formDataJSON = this.workForm.value;
      this._formData.setDataWork(this._formData.getIdUniqueJson());
      this._formData.setDataWork(formDataJSON);
      this._router.navigateByUrl('/work-item');
    }
  }

  generateNumericId(): number {
    const min = 10000000; // 10^7
    const max = 99999999; // 10^8 - 1
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  back(){
    this._authGoogle.logout();
    this._router.navigateByUrl('/login');
  }




}
