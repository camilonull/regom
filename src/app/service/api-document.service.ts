import { Injectable, Component } from '@angular/core';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';
import { FirebaseStorage } from '@firebase/storage';



@Injectable({
  providedIn: 'root'
})
export class ApiDocumentService {


  private basePath = '/uploads';

  constructor() {}

}
