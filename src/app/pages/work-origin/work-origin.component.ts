import { Component } from '@angular/core';
import { CountryService } from '../../service/country.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../../service/form-data.service';
@Component({
  selector: 'app-work-origin',
  templateUrl: './work-origin.component.html',
  styleUrl: './work-origin.component.css'
})
export class WorkOriginComponent {
  options: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];
  countries: any[] | undefined;
  cities: string[] | undefined;


  location: any[] = [];


  isFormSubmitted: boolean = false;

  formGroup: FormGroup;

  constructor(private countryService: CountryService, private router: Router, private formData: FormDataService) {
    this.formGroup = new FormGroup({
      country: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      stateActual: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
    this.getCountries();
  }

  async getCountries() {
    this.countries = await this.countryService.getCountries();
  }


  async onCountrySelect(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    if (value) {

      this.cities = await this.countryService.getCities(value);
    }
  }

  onSubmit(){
    const isFormValid = this.formGroup.valid;
    this.isFormSubmitted = !isFormValid;
    if(isFormValid){
      this.formData.setFormData(this.formGroup.value);
      this.router.navigateByUrl('/work-location');
    }
  }

  back(){
    this.router.navigateByUrl('/work-surface');
  }
}
