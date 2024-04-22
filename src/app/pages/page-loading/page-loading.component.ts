import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-loading',
  templateUrl: './page-loading.component.html',
  styleUrl: './page-loading.component.css'
})
export class PageLoadingComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      // Redirigir a la ruta deseada después de que la carga haya terminado
      this.router.navigateByUrl('/login'); // Por ejemplo, redirige a la página de inicio de sesión
    }, 3000);
   
  }
  

}
