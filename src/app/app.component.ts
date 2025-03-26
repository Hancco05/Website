import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <-- Importa RouterOutlet
import { NavbarComponent } from "./componets/navbar/navbar.component";
import { MainComponent } from "./componets/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,  // Proyecto sin módulos usa standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, NavbarComponent, MainComponent] // <-- Agrega RouterOutlet aquí
})
export class AppComponent {
  title = 'website';
}
