import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../../service/form-data.service';

@Component({
  selector: 'app-work-message',
  templateUrl: './work-message.component.html',
  styleUrl: './work-message.component.css'
})
export class WorkMessageComponent implements OnInit{

  messageText: string = '';
  message: string = '';



  constructor(private _router: Router, private _formData: FormDataService){}

  ngOnInit(): void {
    const formData = this._formData.getDataMessage();
    console.log(formData);
    this.messageText = formData.messageText;
  }

  showMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = '';
    }, 4000);
  }


  onSubmit() {
   if(this.messageText != ''){
    const formData = { messageText: this.messageText };
    this._formData.setDataMessage(this._formData.getIdUniqueJson());
    this._formData.setDataMessage(formData);
    this._router.navigateByUrl('/work-document');
   }else{
    this.showMessage('Escribe tu mensaje y/o descripcion');
   }
  }


  back() {
    this._router.navigateByUrl('/work-location');
  }
}
