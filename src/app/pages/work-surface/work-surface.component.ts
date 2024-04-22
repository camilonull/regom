import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryService} from '../../service/country.service';

@Component({
  selector: 'app-work-surface',
  templateUrl: './work-surface.component.html',
  styleUrl: './work-surface.component.css'
})
export class WorkSurfaceComponent {
  opcionSeleccionada: string = '';
opciones: string[] = ['Otro', 'Opción 2', 'Opción 3', 'Opción 4'];
  
 
  constructor() {}
  ngOnInit(): void {
   
  }


}
