import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true, // 👈 Esto es crucial
  imports: [CommonModule], // 👈 Esto habilita *ngIf, *ngFor, etc.
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ciudades = ['Santiago', 'Buenos Aires', 'Bogota', 'Lima', 'Sao Pablo'];
  showCiudad = true;
  changeCss = true;

  constructor() {}

  ngOnInit(): void {}

  mostrar(): void {
    this.showCiudad = !this.showCiudad;
  }

  cambioCss(): void {
    this.changeCss = !this.changeCss;
  }
}
