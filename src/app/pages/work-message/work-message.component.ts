import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../../service/form-data.service';

@Component({
  selector: 'app-work-message',
  templateUrl: './work-message.component.html',
  styleUrl: './work-message.component.css'
})
export class WorkMessageComponent {

  messageText: string = '';
  message: string = '';



  constructor(private router: Router, private formData: FormDataService){}

  showMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 4000);
  }


  onSubmit() {
   if(this.messageText != ''){
    const formData = { messageText: this.messageText };
    this.formData.setFormData(formData);
    this.router.navigateByUrl('/work-document');
   }else{
    this.showMessage('Escribe tu mensaje y/o descripcion');
   }
  }


  back() {
    this.router.navigateByUrl('/work-location');
  }
}
