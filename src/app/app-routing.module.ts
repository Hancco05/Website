import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { MainComponent } from './componets/main/main.component';
import { TiempoComponent } from './componets/tiempo/tiempo.component';
import { provideRouter } from '@angular/router';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'tiempo', component: TiempoComponent },
  //{ path: '', redirectTo: '/main', pathMatch: 'full' },
  //{ path: '**', component:MainComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot (routes)
  ],
  exports: [ RouterModule ] 
})
export class AppRoutingModule { }
