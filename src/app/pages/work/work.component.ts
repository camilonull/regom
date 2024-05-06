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

  constructor(private router: Router, private authGoogle: AuthGoogleService, private formData: FormDataService){
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
  }

  onSubmit(){
    const isFormValid = this.workForm.valid;
    this.isFormSubmitted = !isFormValid;
    if(isFormValid){
      const formDataJSON = this.workForm.value;

      this.formData.setFormData(formDataJSON);
      console.log(this.formData.getFormData());
      this.router.navigateByUrl('/work-item');
    }
  }

  back(){
    this.authGoogle.logout();
    this.router.navigateByUrl('/login');
  }




}
