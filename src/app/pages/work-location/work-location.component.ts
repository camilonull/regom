import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../../service/form-data.service';

@Component({
  selector: 'app-work-location',
  templateUrl: './work-location.component.html',
  styleUrl: './work-location.component.css',
})
export class WorkLocationComponent {
  latitude: number = 0;
  longitude: number = 0;
  message: string = '';

  constructor(private router: Router, private formData: FormDataService) {}

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Se obtuvieron las coordenadas exitosamente
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.message = '';
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
      // Aquí puedes mostrar un mensaje al usuario indicando que la geolocalización no es compatible
    }
  }


  showMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 4000); // 4 segundos
  }
  onSubmit() {
    if (this.latitude != 0 && this.longitude != 0) {
      const formData = { latitude: this.latitude, longitude: this.longitude }; // Encapsula las coordenadas en un objeto
      this.formData.setFormData(formData);
      this.router.navigateByUrl('/work-message');
    } else {
      this.showMessage('Debes tener las coordenadas corretamente');
    }
  }


  back() {
    this.router.navigateByUrl('/work-origin');
  }
}
