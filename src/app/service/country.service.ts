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

  getLocation() {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://geolocation.onetrust.com/cookieconsentpub/v1/geo/location", requestOptions)
      .then((response: Response) => response.text())
      .then((result: string) => console.log(result))
      .catch((error: any) => console.error(error));
    
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
