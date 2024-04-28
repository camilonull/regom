import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryService} from '../../service/country.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-surface',
  templateUrl: './work-surface.component.html',
  styleUrl: './work-surface.component.css'
})
export class WorkSurfaceComponent {
opciones: string[] = ['Otro', 'Opción 2', 'Opción 3', 'Opción 4'];
  
  optionSurface: string = '';
  optionMat: string = '';

  isFormSubmitted: boolean = false;
 
  formGroup: FormGroup;

  constructor(private router:Router) {
    this.formGroup = new FormGroup({
      surface: new FormControl("", [Validators.required]),
      surfaceOther: new FormControl("", []),
      mat: new FormControl("", [Validators.required]),
      matOther: new FormControl("", [])
    });
  }
  ngOnInit(): void {
   
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
    const isFormValid = this.formGroup.valid;
    this.isFormSubmitted = !isFormValid;
    if(isFormValid){
      this.router.navigateByUrl('/work-origin');
    }
  }

  back(){
    this.router.navigateByUrl('/work-item');
  }

}
