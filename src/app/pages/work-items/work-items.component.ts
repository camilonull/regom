
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  isFormSubmitted: boolean = false;

  workItemsForm: FormGroup;

  constructor(private router:Router){
    this.workItemsForm = new FormGroup({
      styleType: new FormControl("", [Validators.required]),
      otherStyle: new FormControl("", []),
      tec: new FormControl("", [Validators.required]),
      otherTec: new FormControl("", []),
      typeWork: new FormControl("", [Validators.required]),
      otherTypeWork: new FormControl("", [])
    });
    /* this.workItemsForm.get('typeWork').valueChanges.subscribe(value => {
      if (value === 'Otro') {
        this.workItemsForm.get('typeWork').setValidators([Validators.required]);
      } else {
        this.workItemsForm.get('typeWork').clearValidators();
      }
      this.workItemsForm.get('typeWork').updateValueAndValidity();
    });*/
   
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
  
  }


  onSubmit(){
    const isFormValid = this.workItemsForm.valid;
    this.isFormSubmitted = !isFormValid;
    if(isFormValid){
      this.router.navigateByUrl('/work-surface');
    }
  }

  back(){
    this.router.navigateByUrl('/work');
  }
}
