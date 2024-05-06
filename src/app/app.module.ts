import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonCustomComponent } from './components/button-custom/button-custom.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { WorkComponent } from './pages/work/work.component';
import { TitleComponent } from './components/title/title.component';
import { WorkItemsComponent } from './pages/work-items/work-items.component';
import { WorkSurfaceComponent } from './pages/work-surface/work-surface.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkOriginComponent } from './pages/work-origin/work-origin.component';
import { FormsModule } from '@angular/forms';
import { WorkMessageComponent } from './pages/work-message/work-message.component';
import { WorkDocumentComponent } from './pages/work-document/work-document.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WorkLocationComponent } from './pages/work-location/work-location.component';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { OAuthModule } from 'angular-oauth2-oidc';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonCustomComponent,
    SubTitleComponent,
    WorkComponent,
    TitleComponent,
    WorkItemsComponent,
    WorkSurfaceComponent,
    WorkOriginComponent,
    WorkMessageComponent,
    WorkDocumentComponent,
    LoginComponent,
    RegisterComponent,
    WorkLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    OAuthModule.forRoot(),
    provideFirebaseApp(() => initializeApp({"projectId":"mindful-pillar-402516","appId":"1:173317506873:web:e4c42d75651d0f445a0ae8","storageBucket":"mindful-pillar-402516.appspot.com","apiKey":"AIzaSyC-Qn5v572DKSi4Y0QfjlfUfxK0lHk_wtA","authDomain":"mindful-pillar-402516.firebaseapp.com","messagingSenderId":"173317506873","measurementId":"G-GHVSQKRZBB"})),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"mindful-pillar-402516","appId":"1:173317506873:web:e4c42d75651d0f445a0ae8","storageBucket":"mindful-pillar-402516.appspot.com","apiKey":"AIzaSyC-Qn5v572DKSi4Y0QfjlfUfxK0lHk_wtA","authDomain":"mindful-pillar-402516.firebaseapp.com","messagingSenderId":"173317506873","measurementId":"G-GHVSQKRZBB"})),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
