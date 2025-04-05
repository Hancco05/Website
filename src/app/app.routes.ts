import { Routes } from '@angular/router';
import { TiempoComponent } from '../app/componets/tiempo/tiempo.component';
import { MainComponent } from '../app/componets/main/main.component';

export const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'tiempo', component: TiempoComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' }
];
