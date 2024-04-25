import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  workForm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private router: Router){
    this.workForm = new FormGroup({
      title: new FormControl("",[Validators.required]),
      dataCreate: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      higt: new FormControl("",[Validators.required]),
      broad: new FormControl("",[Validators.required]),
      deth: new FormControl("")
    })
  }

  onSubmit(){
    const isFormValid = this.workForm.valid;
    this.isFormSubmitted = !isFormValid;
    if(isFormValid){
      this.router.navigateByUrl('/work-item');
    }
  }

  back(){
    this.router.navigateByUrl('/login');
  }


}
