import { Component } from '@angular/core';

@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrl: './work-items.component.css'
})
export class WorkItemsComponent {
  opciones: string[] = ['Otro', 'Opción 2', 'Opción 3', 'Opción 4'];
  
  opcionSeleccionada: string = '';
}
