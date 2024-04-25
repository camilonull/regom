import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  //https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location

  async getCountries() {
    try {
      const res: any = await this.http
        .get('https://countriesnow.space/api/v0.1/countries')
        .toPromise();
      return res.data.map((country: any) => country.country);
    } catch (error) {
      console.error('Error al obtener los países:', error);
      return [];
    }
  }

  async getCities(country: string) {
    try {
      const res: any = await this.http
        .post<any>('https://countriesnow.space/api/v0.1/countries/cities', {
          country,
        })
        .toPromise();
      return res.data;
    } catch (error) {
      console.error('Error al obtener las ciudades:', error);
      return [];
    }
  }
}
