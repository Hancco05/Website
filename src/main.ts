import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // <-- Importa provideRouter
import { AppComponent } from './app/app.component';
import { MainComponent } from './app/componets/main/main.component';
import { NavbarComponent } from './app/componets/navbar/navbar.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: MainComponent }, // Ruta principal
      { path: 'navbar', component: NavbarComponent } // Ejemplo de ruta
    ])
  ]
});
