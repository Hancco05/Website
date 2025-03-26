import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./componets/navbar/navbar.component";
import { MainComponent } from "./componets/main/main.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, MainComponent]
})
export class AppComponent {
  title = 'website';
}

