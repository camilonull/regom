import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../../service/form-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-location',
  templateUrl: './work-location.component.html',
  styleUrl: './work-location.component.css',
})
export class WorkLocationComponent implements OnInit{
  latitude: number = 0;
  longitude: number = 0;
  altitud: number = 0;
  message: string = '';


  isFormSub: boolean = false;
  locationForm: FormGroup;


  constructor(private _router: Router, private _formData: FormDataService) {
    this.locationForm = new FormGroup({
      latitude: new FormControl("", [Validators.required]),
      longitude: new FormControl("", [Validators.required]),
      altitud: new FormControl("")
    });
  }

  ngOnInit(): void {
    const formLocation = this._formData.getDataLocation();
    if(formLocation){
      this.locationForm.patchValue(formLocation);
    }

  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.locationForm.setValue({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitud: 0
          });
         console.log("altitud", position.coords.altitude)
        },
        (error) => {
          // Se produjo un error al obtener las coordenadas
          if (error.code === error.PERMISSION_DENIED) {
            this.showMessage( 'Tienes que activar el acceso a la ubicacion');
          } else {

            this.showMessage( `Error al obtener la ubicación: ${error}.`);
          }
        }
      );
    } else {
      this.showMessage(
        'La geolocalización no es compatible en este navegador.'
      );

    }
  }


  showMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 4000); // 4 segundos
  }
  onSubmit() {
    if (this.locationForm.valid) {

      this._formData.setDataLocation(this._formData.getIdUniqueJson());
      this._formData.setDataLocation(this.locationForm.value);
      console.log(this._formData.getDataLocation());
      this._router.navigateByUrl('/work-message');
    } else {
      this.showMessage('Debes tener las coordenadas corretamente');
    }
  }


  back() {
    this._router.navigateByUrl('/work-origin');
  }
}
