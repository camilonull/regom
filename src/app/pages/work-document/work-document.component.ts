import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-document',
  templateUrl: './work-document.component.html',
  styleUrl: './work-document.component.css'
})
export class WorkDocumentComponent {
  opciones: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];
  selectedOption: string = "";

  constructor(private router:Router){}

  onSubmit() {
    console.log('Hola');
   }
 
 
   back() {
     this.router.navigateByUrl('/work-message');
   }
}
