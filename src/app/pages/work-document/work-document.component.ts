import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Storage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from '@angular/fire/storage';
import { FormDataService } from '../../service/form-data.service';
import { AuthGoogleService } from '../../service/auth-google.service';

@Component({
  selector: 'app-work-document',
  templateUrl: './work-document.component.html',
  styleUrl: './work-document.component.css'
})
export class WorkDocumentComponent {
  opciones: string[] = ['Opción 1', 'Opción 2', 'Opción 3'];
  selectedOption: string = "";

  constructor(private router:Router, private formData: FormDataService, private authGoogle: AuthGoogleService){}

  onSubmit() {
    console.log('Hola');
   }

   private readonly storage: Storage = inject(Storage);

   async uploadFile(input: HTMLInputElement) {
       if (!input.files) return

       const files: FileList = input.files;

       for (let i = 0; i < files.length; i++) {
           const file = files.item(i);
           if (file) {
               const storageRef = ref(this.storage, file.name);
               console.log(storageRef);
               const uploadTask = uploadBytesResumable(storageRef, file);
              console.log(file.name);
               uploadTask.then(snapshot => {
                getDownloadURL(storageRef).then(url => {

                  this.getDataGoogle();
                  console.log('URL de descarga:', url);
                  const fileData = {
                    fileName: file.name,
                    fileURL: url
                  };

                  this.formData.setFormData(fileData);
                  console.log(this.formData.getFormData());
                }).catch(error => {
                  console.error('Error al obtener la URL de descarga:', error);
                });
              }).catch(error => {
                console.error('Error al subir el archivo:', error);
              });
           }
       }
   }

   borrarArchivo(nombreArchivo: string) {
    const storageRef = ref(this.storage, nombreArchivo);
    deleteObject(storageRef).then(() => {
      console.log('Archivo eliminado del almacenamiento.');
    }).catch(error => {
      console.error('Error al eliminar el archivo:', error);
    });
  }

  getDataGoogle(){
    console.log(this.getDataProfile(JSON.stringify(this.authGoogle.getProfile())));

    this.formData.setFormData(this.getDataProfile(JSON.stringify(this.authGoogle.getProfile())));
  }
  getDataProfile(datosGoogle: string) {

    const perfil = JSON.parse(datosGoogle);


    const { name, email, picture } = perfil;

    const dataProfile = {
        name: name,
        email: email,
        picture: picture
    };

    return dataProfile;
  }
   back() {
     this.router.navigateByUrl('/work-message');
   }
}
