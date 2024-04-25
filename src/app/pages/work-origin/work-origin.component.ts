import { Component } from '@angular/core';
import { CountryService } from '../../service/country.service';
@Component({
  selector: 'app-work-origin',
  templateUrl: './work-origin.component.html',
  styleUrl: './work-origin.component.css'
})
export class WorkOriginComponent {
  options: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];
  countries: any[] | undefined;
  selectedCountry: string = "";
  cities: string[] | undefined;
  selectedOption: string = "";


  location: any[] = [];
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    this.getCountries();
  }

  async getCountries() {
    this.countries = await this.countryService.getCountries();
  }


  async onCountrySelect() {
    if (this.selectedCountry) {
      console.log(this.selectedCountry)
      this.cities = await this.countryService.getCities(this.selectedCountry);
    }
  }
}
