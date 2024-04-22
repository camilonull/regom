import { Component } from '@angular/core';

@Component({
  selector: 'app-work-document',
  templateUrl: './work-document.component.html',
  styleUrl: './work-document.component.css'
})
export class WorkDocumentComponent {
  opciones: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];
  selectedOption: string = "";
}
