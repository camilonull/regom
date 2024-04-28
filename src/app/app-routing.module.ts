import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { WorkItemsComponent } from './pages/work-items/work-items.component';
import { WorkSurfaceComponent } from './pages/work-surface/work-surface.component';
import { WorkOriginComponent } from './pages/work-origin/work-origin.component';
import { WorkMessageComponent } from './pages/work-message/work-message.component';
import { WorkDocumentComponent } from './pages/work-document/work-document.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WorkLocationComponent } from './pages/work-location/work-location.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'work',component:WorkComponent},
  {path:'work-item',component:WorkItemsComponent},
  {path:'work-surface',component:WorkSurfaceComponent},
  {path:'work-origin',component:WorkOriginComponent},
  {path:'work-message',component:WorkMessageComponent},
  {path:'work-document',component:WorkDocumentComponent},
  {path:'work-location',component: WorkLocationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
